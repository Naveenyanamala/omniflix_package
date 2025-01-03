import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { AuctionListing, Bid } from "./auction";
import { Params } from "./params";
import { Listing } from "./listing";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest",
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
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsRequest",
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
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse",
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
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryListingsRequest() {
    return {
        owner: "",
        priceDenom: "",
        pagination: undefined
    };
}
export const QueryListingsRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.priceDenom !== "") {
            writer.uint32(18).string(message.priceDenom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.priceDenom = reader.string();
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
        const message = createBaseQueryListingsRequest();
        message.owner = object.owner ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryListingsRequest();
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.price_denom !== undefined && object.price_denom !== null) {
            message.priceDenom = object.price_denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.price_denom = message.priceDenom === "" ? undefined : message.priceDenom;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryListingsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryListingsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryListingsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsRequest",
            value: QueryListingsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryListingsResponse() {
    return {
        listings: [],
        pagination: undefined
    };
}
export const QueryListingsResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.listings) {
            Listing.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.listings.push(Listing.decode(reader, reader.uint32()));
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
        const message = createBaseQueryListingsResponse();
        message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryListingsResponse();
        message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryListingsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryListingsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryListingsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsResponse",
            value: QueryListingsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryListingRequest() {
    return {
        id: ""
    };
}
export const QueryListingRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
        const message = createBaseQueryListingRequest();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryListingRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryListingRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryListingRequest.decode(message.value);
    },
    toProto(message) {
        return QueryListingRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingRequest",
            value: QueryListingRequest.encode(message).finish()
        };
    }
};
function createBaseQueryListingResponse() {
    return {
        listing: undefined
    };
}
export const QueryListingResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.listing !== undefined) {
            Listing.encode(message.listing, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.listing = Listing.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryListingResponse();
        message.listing = object.listing !== undefined && object.listing !== null ? Listing.fromPartial(object.listing) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryListingResponse();
        if (object.listing !== undefined && object.listing !== null) {
            message.listing = Listing.fromAmino(object.listing);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.listing = message.listing ? Listing.toAmino(message.listing) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryListingResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryListingResponse.decode(message.value);
    },
    toProto(message) {
        return QueryListingResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingResponse",
            value: QueryListingResponse.encode(message).finish()
        };
    }
};
function createBaseQueryListingsByOwnerRequest() {
    return {
        owner: "",
        pagination: undefined
    };
}
export const QueryListingsByOwnerRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingsByOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
        const message = createBaseQueryListingsByOwnerRequest();
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryListingsByOwnerRequest();
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
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryListingsByOwnerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryListingsByOwnerRequest.decode(message.value);
    },
    toProto(message) {
        return QueryListingsByOwnerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerRequest",
            value: QueryListingsByOwnerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryListingsByOwnerResponse() {
    return {
        listings: [],
        pagination: undefined
    };
}
export const QueryListingsByOwnerResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.listings) {
            Listing.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingsByOwnerResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.listings.push(Listing.decode(reader, reader.uint32()));
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
        const message = createBaseQueryListingsByOwnerResponse();
        message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryListingsByOwnerResponse();
        message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryListingsByOwnerResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryListingsByOwnerResponse.decode(message.value);
    },
    toProto(message) {
        return QueryListingsByOwnerResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByOwnerResponse",
            value: QueryListingsByOwnerResponse.encode(message).finish()
        };
    }
};
function createBaseQueryListingByNFTIDRequest() {
    return {
        nftId: ""
    };
}
export const QueryListingByNFTIDRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nftId !== "") {
            writer.uint32(10).string(message.nftId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingByNFTIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nftId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryListingByNFTIDRequest();
        message.nftId = object.nftId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryListingByNFTIDRequest();
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryListingByNFTIDRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryListingByNFTIDRequest.decode(message.value);
    },
    toProto(message) {
        return QueryListingByNFTIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingByNFTIDRequest",
            value: QueryListingByNFTIDRequest.encode(message).finish()
        };
    }
};
function createBaseQueryListingsByPriceDenomRequest() {
    return {
        priceDenom: "",
        pagination: undefined
    };
}
export const QueryListingsByPriceDenomRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.priceDenom !== "") {
            writer.uint32(10).string(message.priceDenom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingsByPriceDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceDenom = reader.string();
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
        const message = createBaseQueryListingsByPriceDenomRequest();
        message.priceDenom = object.priceDenom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryListingsByPriceDenomRequest();
        if (object.price_denom !== undefined && object.price_denom !== null) {
            message.priceDenom = object.price_denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price_denom = message.priceDenom === "" ? undefined : message.priceDenom;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryListingsByPriceDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryListingsByPriceDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryListingsByPriceDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomRequest",
            value: QueryListingsByPriceDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryListingsByPriceDenomResponse() {
    return {
        listings: [],
        pagination: undefined
    };
}
export const QueryListingsByPriceDenomResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.listings) {
            Listing.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryListingsByPriceDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.listings.push(Listing.decode(reader, reader.uint32()));
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
        const message = createBaseQueryListingsByPriceDenomResponse();
        message.listings = object.listings?.map(e => Listing.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryListingsByPriceDenomResponse();
        message.listings = object.listings?.map(e => Listing.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
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
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryListingsByPriceDenomResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryListingsByPriceDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryListingsByPriceDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryListingsByPriceDenomResponse",
            value: QueryListingsByPriceDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAuctionsRequest() {
    return {
        status: 0,
        owner: "",
        priceDenom: "",
        pagination: undefined
    };
}
export const QueryAuctionsRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.priceDenom !== "") {
            writer.uint32(26).string(message.priceDenom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.priceDenom = reader.string();
                    break;
                case 4:
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
        const message = createBaseQueryAuctionsRequest();
        message.status = object.status ?? 0;
        message.owner = object.owner ?? "";
        message.priceDenom = object.priceDenom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuctionsRequest();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        if (object.price_denom !== undefined && object.price_denom !== null) {
            message.priceDenom = object.price_denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status === 0 ? undefined : message.status;
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.price_denom = message.priceDenom === "" ? undefined : message.priceDenom;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuctionsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuctionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAuctionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsRequest",
            value: QueryAuctionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuctionsResponse() {
    return {
        auctions: [],
        pagination: undefined
    };
}
export const QueryAuctionsResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.auctions) {
            AuctionListing.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auctions.push(AuctionListing.decode(reader, reader.uint32()));
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
        const message = createBaseQueryAuctionsResponse();
        message.auctions = object.auctions?.map(e => AuctionListing.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuctionsResponse();
        message.auctions = object.auctions?.map(e => AuctionListing.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.auctions) {
            obj.auctions = message.auctions.map(e => e ? AuctionListing.toAmino(e) : undefined);
        }
        else {
            obj.auctions = message.auctions;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuctionsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuctionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAuctionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsResponse",
            value: QueryAuctionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAuctionRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryAuctionRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuctionRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuctionRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuctionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAuctionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionRequest",
            value: QueryAuctionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuctionResponse() {
    return {
        auction: undefined
    };
}
export const QueryAuctionResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.auction !== undefined) {
            AuctionListing.encode(message.auction, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionResponse();
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
        const message = createBaseQueryAuctionResponse();
        message.auction = object.auction !== undefined && object.auction !== null ? AuctionListing.fromPartial(object.auction) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuctionResponse();
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
        return QueryAuctionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuctionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAuctionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionResponse",
            value: QueryAuctionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAuctionsByOwnerRequest() {
    return {
        owner: "",
        pagination: undefined
    };
}
export const QueryAuctionsByOwnerRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionsByOwnerRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
        const message = createBaseQueryAuctionsByOwnerRequest();
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuctionsByOwnerRequest();
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
        obj.owner = message.owner === "" ? undefined : message.owner;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuctionsByOwnerRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuctionsByOwnerRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAuctionsByOwnerRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByOwnerRequest",
            value: QueryAuctionsByOwnerRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuctionByNFTIDRequest() {
    return {
        nftId: ""
    };
}
export const QueryAuctionByNFTIDRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.nftId !== "") {
            writer.uint32(10).string(message.nftId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionByNFTIDRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nftId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryAuctionByNFTIDRequest();
        message.nftId = object.nftId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuctionByNFTIDRequest();
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuctionByNFTIDRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuctionByNFTIDRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAuctionByNFTIDRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionByNFTIDRequest",
            value: QueryAuctionByNFTIDRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAuctionsByPriceDenomRequest() {
    return {
        priceDenom: "",
        pagination: undefined
    };
}
export const QueryAuctionsByPriceDenomRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.priceDenom !== "") {
            writer.uint32(10).string(message.priceDenom);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuctionsByPriceDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.priceDenom = reader.string();
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
        const message = createBaseQueryAuctionsByPriceDenomRequest();
        message.priceDenom = object.priceDenom ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryAuctionsByPriceDenomRequest();
        if (object.price_denom !== undefined && object.price_denom !== null) {
            message.priceDenom = object.price_denom;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.price_denom = message.priceDenom === "" ? undefined : message.priceDenom;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAuctionsByPriceDenomRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryAuctionsByPriceDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAuctionsByPriceDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryAuctionsByPriceDenomRequest",
            value: QueryAuctionsByPriceDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBidsRequest() {
    return {
        bidder: "",
        pagination: undefined
    };
}
export const QueryBidsRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bidder !== "") {
            writer.uint32(10).string(message.bidder);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bidder = reader.string();
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
        const message = createBaseQueryBidsRequest();
        message.bidder = object.bidder ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidsRequest();
        if (object.bidder !== undefined && object.bidder !== null) {
            message.bidder = object.bidder;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bidder = message.bidder === "" ? undefined : message.bidder;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBidsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBidsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBidsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsRequest",
            value: QueryBidsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBidsResponse() {
    return {
        bids: [],
        pagination: undefined
    };
}
export const QueryBidsResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.bids) {
            Bid.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bids.push(Bid.decode(reader, reader.uint32()));
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
        const message = createBaseQueryBidsResponse();
        message.bids = object.bids?.map(e => Bid.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidsResponse();
        message.bids = object.bids?.map(e => Bid.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.bids) {
            obj.bids = message.bids.map(e => e ? Bid.toAmino(e) : undefined);
        }
        else {
            obj.bids = message.bids;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBidsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBidsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBidsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidsResponse",
            value: QueryBidsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryBidRequest() {
    return {
        id: BigInt(0)
    };
}
export const QueryBidRequest = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== BigInt(0)) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBidRequest();
        message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidRequest();
        if (object.id !== undefined && object.id !== null) {
            message.id = BigInt(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBidRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBidRequest.decode(message.value);
    },
    toProto(message) {
        return QueryBidRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidRequest",
            value: QueryBidRequest.encode(message).finish()
        };
    }
};
function createBaseQueryBidResponse() {
    return {
        bid: undefined
    };
}
export const QueryBidResponse = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.bid !== undefined) {
            Bid.encode(message.bid, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryBidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bid = Bid.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryBidResponse();
        message.bid = object.bid !== undefined && object.bid !== null ? Bid.fromPartial(object.bid) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryBidResponse();
        if (object.bid !== undefined && object.bid !== null) {
            message.bid = Bid.fromAmino(object.bid);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.bid = message.bid ? Bid.toAmino(message.bid) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryBidResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryBidResponse.decode(message.value);
    },
    toProto(message) {
        return QueryBidResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.QueryBidResponse",
            value: QueryBidResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
import { Campaign, Claim } from "./itc";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest",
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
            typeUrl: "/OmniFlix.itc.v1.QueryParamsRequest",
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
    typeUrl: "/OmniFlix.itc.v1.QueryParamsResponse",
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
            typeUrl: "/OmniFlix.itc.v1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCampaignsRequest() {
    return {
        status: 0,
        creator: "",
        pagination: undefined
    };
}
export const QueryCampaignsRequest = {
    typeUrl: "/OmniFlix.itc.v1.QueryCampaignsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.status !== 0) {
            writer.uint32(8).int32(message.status);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCampaignsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.creator = reader.string();
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
        const message = createBaseQueryCampaignsRequest();
        message.status = object.status ?? 0;
        message.creator = object.creator ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCampaignsRequest();
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status === 0 ? undefined : message.status;
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCampaignsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCampaignsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCampaignsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.QueryCampaignsRequest",
            value: QueryCampaignsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCampaignsResponse() {
    return {
        campaigns: [],
        pagination: undefined
    };
}
export const QueryCampaignsResponse = {
    typeUrl: "/OmniFlix.itc.v1.QueryCampaignsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.campaigns) {
            Campaign.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCampaignsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaigns.push(Campaign.decode(reader, reader.uint32()));
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
        const message = createBaseQueryCampaignsResponse();
        message.campaigns = object.campaigns?.map(e => Campaign.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCampaignsResponse();
        message.campaigns = object.campaigns?.map(e => Campaign.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.campaigns) {
            obj.campaigns = message.campaigns.map(e => e ? Campaign.toAmino(e) : undefined);
        }
        else {
            obj.campaigns = message.campaigns;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCampaignsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCampaignsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCampaignsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.QueryCampaignsResponse",
            value: QueryCampaignsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCampaignRequest() {
    return {
        campaignId: BigInt(0)
    };
}
export const QueryCampaignRequest = {
    typeUrl: "/OmniFlix.itc.v1.QueryCampaignRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.campaignId !== BigInt(0)) {
            writer.uint32(8).uint64(message.campaignId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCampaignRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCampaignRequest();
        message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCampaignRequest();
        if (object.campaign_id !== undefined && object.campaign_id !== null) {
            message.campaignId = BigInt(object.campaign_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCampaignRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCampaignRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCampaignRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.QueryCampaignRequest",
            value: QueryCampaignRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCampaignResponse() {
    return {
        campaign: Campaign.fromPartial({})
    };
}
export const QueryCampaignResponse = {
    typeUrl: "/OmniFlix.itc.v1.QueryCampaignResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.campaign !== undefined) {
            Campaign.encode(message.campaign, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCampaignResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaign = Campaign.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseQueryCampaignResponse();
        message.campaign = object.campaign !== undefined && object.campaign !== null ? Campaign.fromPartial(object.campaign) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryCampaignResponse();
        if (object.Campaign !== undefined && object.Campaign !== null) {
            message.campaign = Campaign.fromAmino(object.Campaign);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.Campaign = message.campaign ? Campaign.toAmino(message.campaign) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCampaignResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCampaignResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCampaignResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.QueryCampaignResponse",
            value: QueryCampaignResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClaimsRequest() {
    return {
        campaignId: BigInt(0),
        address: "",
        pagination: undefined
    };
}
export const QueryClaimsRequest = {
    typeUrl: "/OmniFlix.itc.v1.QueryClaimsRequest",
    encode(message, writer = BinaryWriter.create()) {
        if (message.campaignId !== BigInt(0)) {
            writer.uint32(8).uint64(message.campaignId);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignId = reader.uint64();
                    break;
                case 2:
                    message.address = reader.string();
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
        const message = createBaseQueryClaimsRequest();
        message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
        message.address = object.address ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimsRequest();
        if (object.campaign_id !== undefined && object.campaign_id !== null) {
            message.campaignId = BigInt(object.campaign_id);
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
        obj.address = message.address === "" ? undefined : message.address;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClaimsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.QueryClaimsRequest",
            value: QueryClaimsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClaimsResponse() {
    return {
        claims: [],
        pagination: undefined
    };
}
export const QueryClaimsResponse = {
    typeUrl: "/OmniFlix.itc.v1.QueryClaimsResponse",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.claims) {
            Claim.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClaimsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claims.push(Claim.decode(reader, reader.uint32()));
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
        const message = createBaseQueryClaimsResponse();
        message.claims = object.claims?.map(e => Claim.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseQueryClaimsResponse();
        message.claims = object.claims?.map(e => Claim.fromAmino(e)) || [];
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromAmino(object.pagination);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.claims) {
            obj.claims = message.claims.map(e => e ? Claim.toAmino(e) : undefined);
        }
        else {
            obj.claims = message.claims;
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClaimsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryClaimsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClaimsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.QueryClaimsResponse",
            value: QueryClaimsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map
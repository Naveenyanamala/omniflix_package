import { NFTDetails, Distribution } from "./itc";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseMsgCreateCampaign() {
    return {
        name: "",
        description: "",
        interaction: 0,
        claimType: 0,
        nftDenomId: "",
        tokensPerClaim: Coin.fromPartial({}),
        maxAllowedClaims: BigInt(0),
        deposit: Coin.fromPartial({}),
        nftMintDetails: undefined,
        startTime: new Date(),
        duration: Duration.fromPartial({}),
        distribution: undefined,
        creator: "",
        creationFee: Coin.fromPartial({})
    };
}
export const MsgCreateCampaign = {
    typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.interaction !== 0) {
            writer.uint32(24).int32(message.interaction);
        }
        if (message.claimType !== 0) {
            writer.uint32(32).int32(message.claimType);
        }
        if (message.nftDenomId !== "") {
            writer.uint32(42).string(message.nftDenomId);
        }
        if (message.tokensPerClaim !== undefined) {
            Coin.encode(message.tokensPerClaim, writer.uint32(50).fork()).ldelim();
        }
        if (message.maxAllowedClaims !== BigInt(0)) {
            writer.uint32(56).uint64(message.maxAllowedClaims);
        }
        if (message.deposit !== undefined) {
            Coin.encode(message.deposit, writer.uint32(66).fork()).ldelim();
        }
        if (message.nftMintDetails !== undefined) {
            NFTDetails.encode(message.nftMintDetails, writer.uint32(74).fork()).ldelim();
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(82).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(90).fork()).ldelim();
        }
        if (message.distribution !== undefined) {
            Distribution.encode(message.distribution, writer.uint32(98).fork()).ldelim();
        }
        if (message.creator !== "") {
            writer.uint32(106).string(message.creator);
        }
        if (message.creationFee !== undefined) {
            Coin.encode(message.creationFee, writer.uint32(114).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCampaign();
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
                    message.interaction = reader.int32();
                    break;
                case 4:
                    message.claimType = reader.int32();
                    break;
                case 5:
                    message.nftDenomId = reader.string();
                    break;
                case 6:
                    message.tokensPerClaim = Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.maxAllowedClaims = reader.uint64();
                    break;
                case 8:
                    message.deposit = Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.nftMintDetails = NFTDetails.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.distribution = Distribution.decode(reader, reader.uint32());
                    break;
                case 13:
                    message.creator = reader.string();
                    break;
                case 14:
                    message.creationFee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateCampaign();
        message.name = object.name ?? "";
        message.description = object.description ?? "";
        message.interaction = object.interaction ?? 0;
        message.claimType = object.claimType ?? 0;
        message.nftDenomId = object.nftDenomId ?? "";
        message.tokensPerClaim = object.tokensPerClaim !== undefined && object.tokensPerClaim !== null ? Coin.fromPartial(object.tokensPerClaim) : undefined;
        message.maxAllowedClaims = object.maxAllowedClaims !== undefined && object.maxAllowedClaims !== null ? BigInt(object.maxAllowedClaims.toString()) : BigInt(0);
        message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
        message.nftMintDetails = object.nftMintDetails !== undefined && object.nftMintDetails !== null ? NFTDetails.fromPartial(object.nftMintDetails) : undefined;
        message.startTime = object.startTime ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.distribution = object.distribution !== undefined && object.distribution !== null ? Distribution.fromPartial(object.distribution) : undefined;
        message.creator = object.creator ?? "";
        message.creationFee = object.creationFee !== undefined && object.creationFee !== null ? Coin.fromPartial(object.creationFee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCreateCampaign();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        if (object.interaction !== undefined && object.interaction !== null) {
            message.interaction = object.interaction;
        }
        if (object.claim_type !== undefined && object.claim_type !== null) {
            message.claimType = object.claim_type;
        }
        if (object.nft_denom_id !== undefined && object.nft_denom_id !== null) {
            message.nftDenomId = object.nft_denom_id;
        }
        if (object.tokens_per_claim !== undefined && object.tokens_per_claim !== null) {
            message.tokensPerClaim = Coin.fromAmino(object.tokens_per_claim);
        }
        if (object.max_allowed_claims !== undefined && object.max_allowed_claims !== null) {
            message.maxAllowedClaims = BigInt(object.max_allowed_claims);
        }
        if (object.deposit !== undefined && object.deposit !== null) {
            message.deposit = Coin.fromAmino(object.deposit);
        }
        if (object.nft_mint_details !== undefined && object.nft_mint_details !== null) {
            message.nftMintDetails = NFTDetails.fromAmino(object.nft_mint_details);
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        if (object.distribution !== undefined && object.distribution !== null) {
            message.distribution = Distribution.fromAmino(object.distribution);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        if (object.creation_fee !== undefined && object.creation_fee !== null) {
            message.creationFee = Coin.fromAmino(object.creation_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name === "" ? undefined : message.name;
        obj.description = message.description === "" ? undefined : message.description;
        obj.interaction = message.interaction === 0 ? undefined : message.interaction;
        obj.claim_type = message.claimType === 0 ? undefined : message.claimType;
        obj.nft_denom_id = message.nftDenomId === "" ? undefined : message.nftDenomId;
        obj.tokens_per_claim = message.tokensPerClaim ? Coin.toAmino(message.tokensPerClaim) : undefined;
        obj.max_allowed_claims = message.maxAllowedClaims !== BigInt(0) ? message.maxAllowedClaims?.toString() : undefined;
        obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : undefined;
        obj.nft_mint_details = message.nftMintDetails ? NFTDetails.toAmino(message.nftMintDetails) : undefined;
        obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        obj.distribution = message.distribution ? Distribution.toAmino(message.distribution) : undefined;
        obj.creator = message.creator === "" ? undefined : message.creator;
        obj.creation_fee = message.creationFee ? Coin.toAmino(message.creationFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateCampaign.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/itc/MsgCreateCampaign",
            value: MsgCreateCampaign.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateCampaign.decode(message.value);
    },
    toProto(message) {
        return MsgCreateCampaign.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
            value: MsgCreateCampaign.encode(message).finish()
        };
    }
};
function createBaseMsgCreateCampaignResponse() {
    return {};
}
export const MsgCreateCampaignResponse = {
    typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateCampaignResponse();
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
        const message = createBaseMsgCreateCampaignResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCreateCampaignResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateCampaignResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCreateCampaignResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateCampaignResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaignResponse",
            value: MsgCreateCampaignResponse.encode(message).finish()
        };
    }
};
function createBaseMsgCancelCampaign() {
    return {
        campaignId: BigInt(0),
        creator: ""
    };
}
export const MsgCancelCampaign = {
    typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
    encode(message, writer = BinaryWriter.create()) {
        if (message.campaignId !== BigInt(0)) {
            writer.uint32(8).uint64(message.campaignId);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelCampaign();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignId = reader.uint64();
                    break;
                case 2:
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
        const message = createBaseMsgCancelCampaign();
        message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
        message.creator = object.creator ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgCancelCampaign();
        if (object.campaign_id !== undefined && object.campaign_id !== null) {
            message.campaignId = BigInt(object.campaign_id);
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
        obj.creator = message.creator === "" ? undefined : message.creator;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelCampaign.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/itc/MsgCancelCampaign",
            value: MsgCancelCampaign.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCancelCampaign.decode(message.value);
    },
    toProto(message) {
        return MsgCancelCampaign.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
            value: MsgCancelCampaign.encode(message).finish()
        };
    }
};
function createBaseMsgCancelCampaignResponse() {
    return {};
}
export const MsgCancelCampaignResponse = {
    typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCancelCampaignResponse();
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
        const message = createBaseMsgCancelCampaignResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgCancelCampaignResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCancelCampaignResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgCancelCampaignResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCancelCampaignResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaignResponse",
            value: MsgCancelCampaignResponse.encode(message).finish()
        };
    }
};
function createBaseMsgClaim() {
    return {
        campaignId: BigInt(0),
        nftId: "",
        interaction: 0,
        claimer: ""
    };
}
export const MsgClaim = {
    typeUrl: "/OmniFlix.itc.v1.MsgClaim",
    encode(message, writer = BinaryWriter.create()) {
        if (message.campaignId !== BigInt(0)) {
            writer.uint32(8).uint64(message.campaignId);
        }
        if (message.nftId !== "") {
            writer.uint32(18).string(message.nftId);
        }
        if (message.interaction !== 0) {
            writer.uint32(24).int32(message.interaction);
        }
        if (message.claimer !== "") {
            writer.uint32(34).string(message.claimer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignId = reader.uint64();
                    break;
                case 2:
                    message.nftId = reader.string();
                    break;
                case 3:
                    message.interaction = reader.int32();
                    break;
                case 4:
                    message.claimer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgClaim();
        message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
        message.nftId = object.nftId ?? "";
        message.interaction = object.interaction ?? 0;
        message.claimer = object.claimer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaim();
        if (object.campaign_id !== undefined && object.campaign_id !== null) {
            message.campaignId = BigInt(object.campaign_id);
        }
        if (object.nft_id !== undefined && object.nft_id !== null) {
            message.nftId = object.nft_id;
        }
        if (object.interaction !== undefined && object.interaction !== null) {
            message.interaction = object.interaction;
        }
        if (object.claimer !== undefined && object.claimer !== null) {
            message.claimer = object.claimer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
        obj.nft_id = message.nftId === "" ? undefined : message.nftId;
        obj.interaction = message.interaction === 0 ? undefined : message.interaction;
        obj.claimer = message.claimer === "" ? undefined : message.claimer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaim.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/itc/MsgClaim",
            value: MsgClaim.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgClaim.decode(message.value);
    },
    toProto(message) {
        return MsgClaim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.MsgClaim",
            value: MsgClaim.encode(message).finish()
        };
    }
};
function createBaseMsgClaimResponse() {
    return {};
}
export const MsgClaimResponse = {
    typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimResponse();
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
        const message = createBaseMsgClaimResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgClaimResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaimResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClaimResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.MsgClaimResponse",
            value: MsgClaimResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDepositCampaign() {
    return {
        campaignId: BigInt(0),
        amount: Coin.fromPartial({}),
        depositor: ""
    };
}
export const MsgDepositCampaign = {
    typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
    encode(message, writer = BinaryWriter.create()) {
        if (message.campaignId !== BigInt(0)) {
            writer.uint32(8).uint64(message.campaignId);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        if (message.depositor !== "") {
            writer.uint32(26).string(message.depositor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositCampaign();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.campaignId = reader.uint64();
                    break;
                case 2:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.depositor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgDepositCampaign();
        message.campaignId = object.campaignId !== undefined && object.campaignId !== null ? BigInt(object.campaignId.toString()) : BigInt(0);
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.depositor = object.depositor ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDepositCampaign();
        if (object.campaign_id !== undefined && object.campaign_id !== null) {
            message.campaignId = BigInt(object.campaign_id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.campaign_id = message.campaignId !== BigInt(0) ? message.campaignId?.toString() : undefined;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.depositor = message.depositor === "" ? undefined : message.depositor;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositCampaign.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/itc/MsgDepositCampaign",
            value: MsgDepositCampaign.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDepositCampaign.decode(message.value);
    },
    toProto(message) {
        return MsgDepositCampaign.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
            value: MsgDepositCampaign.encode(message).finish()
        };
    }
};
function createBaseMsgDepositCampaignResponse() {
    return {};
}
export const MsgDepositCampaignResponse = {
    typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDepositCampaignResponse();
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
        const message = createBaseMsgDepositCampaignResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositCampaignResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositCampaignResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgDepositCampaignResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositCampaignResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaignResponse",
            value: MsgDepositCampaignResponse.encode(message).finish()
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
    typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
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
            typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/OmniFlix.itc.v1.MsgUpdateParamsResponse",
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
            typeUrl: "/OmniFlix.itc.v1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
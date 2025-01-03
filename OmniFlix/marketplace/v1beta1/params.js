import { Duration } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseParams() {
    return {
        saleCommission: "",
        distribution: Distribution.fromPartial({}),
        bidCloseDuration: Duration.fromPartial({}),
        maxAuctionDuration: Duration.fromPartial({})
    };
}
export const Params = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.saleCommission !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.saleCommission, 18).atomics);
        }
        if (message.distribution !== undefined) {
            Distribution.encode(message.distribution, writer.uint32(18).fork()).ldelim();
        }
        if (message.bidCloseDuration !== undefined) {
            Duration.encode(message.bidCloseDuration, writer.uint32(26).fork()).ldelim();
        }
        if (message.maxAuctionDuration !== undefined) {
            Duration.encode(message.maxAuctionDuration, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.saleCommission = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.distribution = Distribution.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.bidCloseDuration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.maxAuctionDuration = Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.saleCommission = object.saleCommission ?? "";
        message.distribution = object.distribution !== undefined && object.distribution !== null ? Distribution.fromPartial(object.distribution) : undefined;
        message.bidCloseDuration = object.bidCloseDuration !== undefined && object.bidCloseDuration !== null ? Duration.fromPartial(object.bidCloseDuration) : undefined;
        message.maxAuctionDuration = object.maxAuctionDuration !== undefined && object.maxAuctionDuration !== null ? Duration.fromPartial(object.maxAuctionDuration) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.sale_commission !== undefined && object.sale_commission !== null) {
            message.saleCommission = object.sale_commission;
        }
        if (object.distribution !== undefined && object.distribution !== null) {
            message.distribution = Distribution.fromAmino(object.distribution);
        }
        if (object.bid_close_duration !== undefined && object.bid_close_duration !== null) {
            message.bidCloseDuration = Duration.fromAmino(object.bid_close_duration);
        }
        if (object.max_auction_duration !== undefined && object.max_auction_duration !== null) {
            message.maxAuctionDuration = Duration.fromAmino(object.max_auction_duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sale_commission = message.saleCommission === "" ? undefined : message.saleCommission;
        obj.distribution = message.distribution ? Distribution.toAmino(message.distribution) : undefined;
        obj.bid_close_duration = message.bidCloseDuration ? Duration.toAmino(message.bidCloseDuration) : undefined;
        obj.max_auction_duration = message.maxAuctionDuration ? Duration.toAmino(message.maxAuctionDuration) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseDistribution() {
    return {
        staking: "",
        communityPool: ""
    };
}
export const Distribution = {
    typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution",
    encode(message, writer = BinaryWriter.create()) {
        if (message.staking !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.staking, 18).atomics);
        }
        if (message.communityPool !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDistribution();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staking = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDistribution();
        message.staking = object.staking ?? "";
        message.communityPool = object.communityPool ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDistribution();
        if (object.staking !== undefined && object.staking !== null) {
            message.staking = object.staking;
        }
        if (object.community_pool !== undefined && object.community_pool !== null) {
            message.communityPool = object.community_pool;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.staking = message.staking === "" ? undefined : message.staking;
        obj.community_pool = message.communityPool === "" ? undefined : message.communityPool;
        return obj;
    },
    fromAminoMsg(object) {
        return Distribution.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Distribution.decode(message.value);
    },
    toProto(message) {
        return Distribution.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.marketplace.v1beta1.Distribution",
            value: Distribution.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/OmniFlix.globalfee.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
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
            typeUrl: "/OmniFlix.globalfee.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        minimumGasPrices: [],
        bypassMinFeeMsgTypes: [],
        maxTotalBypassMinFeeMsgGasUsage: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/OmniFlix.globalfee.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.minimumGasPrices) {
            DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.bypassMinFeeMsgTypes) {
            writer.uint32(18).string(v);
        }
        if (message.maxTotalBypassMinFeeMsgGasUsage !== BigInt(0)) {
            writer.uint32(24).uint64(message.maxTotalBypassMinFeeMsgGasUsage);
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
                    message.minimumGasPrices.push(DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.bypassMinFeeMsgTypes.push(reader.string());
                    break;
                case 3:
                    message.maxTotalBypassMinFeeMsgGasUsage = reader.uint64();
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
        message.minimumGasPrices = object.minimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
        message.bypassMinFeeMsgTypes = object.bypassMinFeeMsgTypes?.map(e => e) || [];
        message.maxTotalBypassMinFeeMsgGasUsage = object.maxTotalBypassMinFeeMsgGasUsage !== undefined && object.maxTotalBypassMinFeeMsgGasUsage !== null ? BigInt(object.maxTotalBypassMinFeeMsgGasUsage.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        message.minimumGasPrices = object.minimum_gas_prices?.map(e => DecCoin.fromAmino(e)) || [];
        message.bypassMinFeeMsgTypes = object.bypass_min_fee_msg_types?.map(e => e) || [];
        if (object.max_total_bypass_min_fee_msg_gas_usage !== undefined && object.max_total_bypass_min_fee_msg_gas_usage !== null) {
            message.maxTotalBypassMinFeeMsgGasUsage = BigInt(object.max_total_bypass_min_fee_msg_gas_usage);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.minimumGasPrices) {
            obj.minimum_gas_prices = message.minimumGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.minimum_gas_prices = message.minimumGasPrices;
        }
        if (message.bypassMinFeeMsgTypes) {
            obj.bypass_min_fee_msg_types = message.bypassMinFeeMsgTypes.map(e => e);
        }
        else {
            obj.bypass_min_fee_msg_types = message.bypassMinFeeMsgTypes;
        }
        obj.max_total_bypass_min_fee_msg_gas_usage = message.maxTotalBypassMinFeeMsgGasUsage !== BigInt(0) ? message.maxTotalBypassMinFeeMsgGasUsage?.toString() : undefined;
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
            typeUrl: "/OmniFlix.globalfee.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
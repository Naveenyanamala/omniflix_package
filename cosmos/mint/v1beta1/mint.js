import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
function createBaseMinter() {
    return {
        inflation: "",
        annualProvisions: ""
    };
}
export const Minter = {
    typeUrl: "/cosmos.mint.v1beta1.Minter",
    encode(message, writer = BinaryWriter.create()) {
        if (message.inflation !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.inflation, 18).atomics);
        }
        if (message.annualProvisions !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMinter();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inflation = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 2:
                    message.annualProvisions = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMinter();
        message.inflation = object.inflation ?? "";
        message.annualProvisions = object.annualProvisions ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMinter();
        if (object.inflation !== undefined && object.inflation !== null) {
            message.inflation = object.inflation;
        }
        if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
            message.annualProvisions = object.annual_provisions;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.inflation = message.inflation === "" ? undefined : message.inflation;
        obj.annual_provisions = message.annualProvisions === "" ? undefined : message.annualProvisions;
        return obj;
    },
    fromAminoMsg(object) {
        return Minter.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Minter",
            value: Minter.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Minter.decode(message.value);
    },
    toProto(message) {
        return Minter.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.Minter",
            value: Minter.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        mintDenom: "",
        inflationRateChange: "",
        inflationMax: "",
        inflationMin: "",
        goalBonded: "",
        blocksPerYear: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/cosmos.mint.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.mintDenom !== "") {
            writer.uint32(10).string(message.mintDenom);
        }
        if (message.inflationRateChange !== "") {
            writer.uint32(18).string(Decimal.fromUserInput(message.inflationRateChange, 18).atomics);
        }
        if (message.inflationMax !== "") {
            writer.uint32(26).string(Decimal.fromUserInput(message.inflationMax, 18).atomics);
        }
        if (message.inflationMin !== "") {
            writer.uint32(34).string(Decimal.fromUserInput(message.inflationMin, 18).atomics);
        }
        if (message.goalBonded !== "") {
            writer.uint32(42).string(Decimal.fromUserInput(message.goalBonded, 18).atomics);
        }
        if (message.blocksPerYear !== BigInt(0)) {
            writer.uint32(48).uint64(message.blocksPerYear);
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
                    message.mintDenom = reader.string();
                    break;
                case 2:
                    message.inflationRateChange = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 3:
                    message.inflationMax = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 4:
                    message.inflationMin = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 5:
                    message.goalBonded = Decimal.fromAtomics(reader.string(), 18).toString();
                    break;
                case 6:
                    message.blocksPerYear = reader.uint64();
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
        message.mintDenom = object.mintDenom ?? "";
        message.inflationRateChange = object.inflationRateChange ?? "";
        message.inflationMax = object.inflationMax ?? "";
        message.inflationMin = object.inflationMin ?? "";
        message.goalBonded = object.goalBonded ?? "";
        message.blocksPerYear = object.blocksPerYear !== undefined && object.blocksPerYear !== null ? BigInt(object.blocksPerYear.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.mint_denom !== undefined && object.mint_denom !== null) {
            message.mintDenom = object.mint_denom;
        }
        if (object.inflation_rate_change !== undefined && object.inflation_rate_change !== null) {
            message.inflationRateChange = object.inflation_rate_change;
        }
        if (object.inflation_max !== undefined && object.inflation_max !== null) {
            message.inflationMax = object.inflation_max;
        }
        if (object.inflation_min !== undefined && object.inflation_min !== null) {
            message.inflationMin = object.inflation_min;
        }
        if (object.goal_bonded !== undefined && object.goal_bonded !== null) {
            message.goalBonded = object.goal_bonded;
        }
        if (object.blocks_per_year !== undefined && object.blocks_per_year !== null) {
            message.blocksPerYear = BigInt(object.blocks_per_year);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.mint_denom = message.mintDenom === "" ? undefined : message.mintDenom;
        obj.inflation_rate_change = message.inflationRateChange === "" ? undefined : message.inflationRateChange;
        obj.inflation_max = message.inflationMax === "" ? undefined : message.inflationMax;
        obj.inflation_min = message.inflationMin === "" ? undefined : message.inflationMin;
        obj.goal_bonded = message.goalBonded === "" ? undefined : message.goalBonded;
        obj.blocks_per_year = message.blocksPerYear !== BigInt(0) ? message.blocksPerYear?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/mint/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.mint.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=mint.js.map
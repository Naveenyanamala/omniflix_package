import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp } from "../../../helpers";
function createBaseEquivocation() {
    return {
        height: BigInt(0),
        time: new Date(),
        power: BigInt(0),
        consensusAddress: ""
    };
}
export const Equivocation = {
    typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
    encode(message, writer = BinaryWriter.create()) {
        if (message.height !== BigInt(0)) {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
        }
        if (message.power !== BigInt(0)) {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensusAddress !== "") {
            writer.uint32(34).string(message.consensusAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEquivocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.power = reader.int64();
                    break;
                case 4:
                    message.consensusAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseEquivocation();
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.power = object.power !== undefined && object.power !== null ? BigInt(object.power.toString()) : BigInt(0);
        message.consensusAddress = object.consensusAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseEquivocation();
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.power !== undefined && object.power !== null) {
            message.power = BigInt(object.power);
        }
        if (object.consensus_address !== undefined && object.consensus_address !== null) {
            message.consensusAddress = object.consensus_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : new Date();
        obj.power = message.power !== BigInt(0) ? message.power?.toString() : undefined;
        obj.consensus_address = message.consensusAddress === "" ? undefined : message.consensusAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return Equivocation.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Equivocation",
            value: Equivocation.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Equivocation.decode(message.value);
    },
    toProto(message) {
        return Equivocation.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
            value: Equivocation.encode(message).finish()
        };
    }
};
//# sourceMappingURL=evidence.js.map
import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { Timestamp } from "../../../google/protobuf/timestamp.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { toTimestamp, fromTimestamp } from "../../../helpers.js";
export var StreamType;
(function (StreamType) {
    StreamType[StreamType["STREAM_PAYMENT_TYPE_DELAYED"] = 0] = "STREAM_PAYMENT_TYPE_DELAYED";
    StreamType[StreamType["STREAM_PAYMENT_TYPE_CONTINUOUS"] = 1] = "STREAM_PAYMENT_TYPE_CONTINUOUS";
    StreamType[StreamType["STREAM_PAYMENT_TYPE_PERIODIC"] = 2] = "STREAM_PAYMENT_TYPE_PERIODIC";
    StreamType[StreamType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamType || (StreamType = {}));
export const StreamTypeSDKType = StreamType;
export const StreamTypeAmino = StreamType;
export function streamTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STREAM_PAYMENT_TYPE_DELAYED":
            return StreamType.STREAM_PAYMENT_TYPE_DELAYED;
        case 1:
        case "STREAM_PAYMENT_TYPE_CONTINUOUS":
            return StreamType.STREAM_PAYMENT_TYPE_CONTINUOUS;
        case 2:
        case "STREAM_PAYMENT_TYPE_PERIODIC":
            return StreamType.STREAM_PAYMENT_TYPE_PERIODIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StreamType.UNRECOGNIZED;
    }
}
export function streamTypeToJSON(object) {
    switch (object) {
        case StreamType.STREAM_PAYMENT_TYPE_DELAYED:
            return "STREAM_PAYMENT_TYPE_DELAYED";
        case StreamType.STREAM_PAYMENT_TYPE_CONTINUOUS:
            return "STREAM_PAYMENT_TYPE_CONTINUOUS";
        case StreamType.STREAM_PAYMENT_TYPE_PERIODIC:
            return "STREAM_PAYMENT_TYPE_PERIODIC";
        case StreamType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var StreamStatus;
(function (StreamStatus) {
    StreamStatus[StreamStatus["STREAM_PAYMENT_STATUS_ACTIVE"] = 0] = "STREAM_PAYMENT_STATUS_ACTIVE";
    StreamStatus[StreamStatus["STREAM_PAYMENT_STATUS_COMPLETED"] = 1] = "STREAM_PAYMENT_STATUS_COMPLETED";
    StreamStatus[StreamStatus["STREAM_PAYMENT_STATUS_CANCELLED"] = 2] = "STREAM_PAYMENT_STATUS_CANCELLED";
    StreamStatus[StreamStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(StreamStatus || (StreamStatus = {}));
export const StreamStatusSDKType = StreamStatus;
export const StreamStatusAmino = StreamStatus;
export function streamStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STREAM_PAYMENT_STATUS_ACTIVE":
            return StreamStatus.STREAM_PAYMENT_STATUS_ACTIVE;
        case 1:
        case "STREAM_PAYMENT_STATUS_COMPLETED":
            return StreamStatus.STREAM_PAYMENT_STATUS_COMPLETED;
        case 2:
        case "STREAM_PAYMENT_STATUS_CANCELLED":
            return StreamStatus.STREAM_PAYMENT_STATUS_CANCELLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return StreamStatus.UNRECOGNIZED;
    }
}
export function streamStatusToJSON(object) {
    switch (object) {
        case StreamStatus.STREAM_PAYMENT_STATUS_ACTIVE:
            return "STREAM_PAYMENT_STATUS_ACTIVE";
        case StreamStatus.STREAM_PAYMENT_STATUS_COMPLETED:
            return "STREAM_PAYMENT_STATUS_COMPLETED";
        case StreamStatus.STREAM_PAYMENT_STATUS_CANCELLED:
            return "STREAM_PAYMENT_STATUS_CANCELLED";
        case StreamStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseStreamPayment() {
    return {
        id: "",
        sender: "",
        recipient: "",
        totalAmount: Coin.fromPartial({}),
        streamType: 0,
        periods: [],
        cancellable: false,
        startTime: new Date(),
        endTime: new Date(),
        streamedAmount: Coin.fromPartial({}),
        lastClaimedAt: new Date(),
        status: 0
    };
}
export const StreamPayment = {
    typeUrl: "/OmniFlix.streampay.v1.StreamPayment",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.totalAmount !== undefined) {
            Coin.encode(message.totalAmount, writer.uint32(34).fork()).ldelim();
        }
        if (message.streamType !== 0) {
            writer.uint32(40).int32(message.streamType);
        }
        for (const v of message.periods) {
            Period.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.cancellable === true) {
            writer.uint32(56).bool(message.cancellable);
        }
        if (message.startTime !== undefined) {
            Timestamp.encode(toTimestamp(message.startTime), writer.uint32(66).fork()).ldelim();
        }
        if (message.endTime !== undefined) {
            Timestamp.encode(toTimestamp(message.endTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.streamedAmount !== undefined) {
            Coin.encode(message.streamedAmount, writer.uint32(82).fork()).ldelim();
        }
        if (message.lastClaimedAt !== undefined) {
            Timestamp.encode(toTimestamp(message.lastClaimedAt), writer.uint32(90).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(96).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamPayment();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.totalAmount = Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.streamType = reader.int32();
                    break;
                case 6:
                    message.periods.push(Period.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.cancellable = reader.bool();
                    break;
                case 8:
                    message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.endTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.streamedAmount = Coin.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.lastClaimedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseStreamPayment();
        message.id = object.id ?? "";
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.totalAmount = object.totalAmount !== undefined && object.totalAmount !== null ? Coin.fromPartial(object.totalAmount) : undefined;
        message.streamType = object.streamType ?? 0;
        message.periods = object.periods?.map(e => Period.fromPartial(e)) || [];
        message.cancellable = object.cancellable ?? false;
        message.startTime = object.startTime ?? undefined;
        message.endTime = object.endTime ?? undefined;
        message.streamedAmount = object.streamedAmount !== undefined && object.streamedAmount !== null ? Coin.fromPartial(object.streamedAmount) : undefined;
        message.lastClaimedAt = object.lastClaimedAt ?? undefined;
        message.status = object.status ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseStreamPayment();
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.total_amount !== undefined && object.total_amount !== null) {
            message.totalAmount = Coin.fromAmino(object.total_amount);
        }
        if (object.stream_type !== undefined && object.stream_type !== null) {
            message.streamType = object.stream_type;
        }
        message.periods = object.periods?.map(e => Period.fromAmino(e)) || [];
        if (object.cancellable !== undefined && object.cancellable !== null) {
            message.cancellable = object.cancellable;
        }
        if (object.start_time !== undefined && object.start_time !== null) {
            message.startTime = fromTimestamp(Timestamp.fromAmino(object.start_time));
        }
        if (object.end_time !== undefined && object.end_time !== null) {
            message.endTime = fromTimestamp(Timestamp.fromAmino(object.end_time));
        }
        if (object.streamed_amount !== undefined && object.streamed_amount !== null) {
            message.streamedAmount = Coin.fromAmino(object.streamed_amount);
        }
        if (object.last_claimed_at !== undefined && object.last_claimed_at !== null) {
            message.lastClaimedAt = fromTimestamp(Timestamp.fromAmino(object.last_claimed_at));
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id === "" ? undefined : message.id;
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.total_amount = message.totalAmount ? Coin.toAmino(message.totalAmount) : undefined;
        obj.stream_type = message.streamType === 0 ? undefined : message.streamType;
        if (message.periods) {
            obj.periods = message.periods.map(e => e ? Period.toAmino(e) : undefined);
        }
        else {
            obj.periods = message.periods;
        }
        obj.cancellable = message.cancellable === false ? undefined : message.cancellable;
        obj.start_time = message.startTime ? Timestamp.toAmino(toTimestamp(message.startTime)) : undefined;
        obj.end_time = message.endTime ? Timestamp.toAmino(toTimestamp(message.endTime)) : undefined;
        obj.streamed_amount = message.streamedAmount ? Coin.toAmino(message.streamedAmount) : undefined;
        obj.last_claimed_at = message.lastClaimedAt ? Timestamp.toAmino(toTimestamp(message.lastClaimedAt)) : undefined;
        obj.status = message.status === 0 ? undefined : message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return StreamPayment.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return StreamPayment.decode(message.value);
    },
    toProto(message) {
        return StreamPayment.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.StreamPayment",
            value: StreamPayment.encode(message).finish()
        };
    }
};
function createBasePeriod() {
    return {
        amount: BigInt(0),
        duration: BigInt(0)
    };
}
export const Period = {
    typeUrl: "/OmniFlix.streampay.v1.Period",
    encode(message, writer = BinaryWriter.create()) {
        if (message.amount !== BigInt(0)) {
            writer.uint32(8).int64(message.amount);
        }
        if (message.duration !== BigInt(0)) {
            writer.uint32(16).int64(message.duration);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = reader.int64();
                    break;
                case 2:
                    message.duration = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBasePeriod();
        message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
        message.duration = object.duration !== undefined && object.duration !== null ? BigInt(object.duration.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBasePeriod();
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = BigInt(object.amount);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = BigInt(object.duration);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount !== BigInt(0) ? message.amount?.toString() : undefined;
        obj.duration = message.duration !== BigInt(0) ? message.duration?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Period.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Period.decode(message.value);
    },
    toProto(message) {
        return Period.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.Period",
            value: Period.encode(message).finish()
        };
    }
};
//# sourceMappingURL=streampay.js.map
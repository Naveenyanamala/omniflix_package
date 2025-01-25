import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { Duration } from "../../../google/protobuf/duration.js";
import { Period } from "./streampay.js";
import { Params } from "./params.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
function createBaseMsgStreamSend() {
    return {
        sender: "",
        recipient: "",
        amount: Coin.fromPartial({}),
        duration: Duration.fromPartial({}),
        streamType: 0,
        periods: [],
        cancellable: false,
        paymentFee: Coin.fromPartial({})
    };
}
export const MsgStreamSend = {
    typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.recipient !== "") {
            writer.uint32(18).string(message.recipient);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(34).fork()).ldelim();
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
        if (message.paymentFee !== undefined) {
            Coin.encode(message.paymentFee, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStreamSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.recipient = reader.string();
                    break;
                case 3:
                    message.amount = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.duration = Duration.decode(reader, reader.uint32());
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
                    message.paymentFee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgStreamSend();
        message.sender = object.sender ?? "";
        message.recipient = object.recipient ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.streamType = object.streamType ?? 0;
        message.periods = object.periods?.map(e => Period.fromPartial(e)) || [];
        message.cancellable = object.cancellable ?? false;
        message.paymentFee = object.paymentFee !== undefined && object.paymentFee !== null ? Coin.fromPartial(object.paymentFee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStreamSend();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Coin.fromAmino(object.amount);
        }
        if (object.duration !== undefined && object.duration !== null) {
            message.duration = Duration.fromAmino(object.duration);
        }
        if (object.stream_type !== undefined && object.stream_type !== null) {
            message.streamType = object.stream_type;
        }
        message.periods = object.periods?.map(e => Period.fromAmino(e)) || [];
        if (object.cancellable !== undefined && object.cancellable !== null) {
            message.cancellable = object.cancellable;
        }
        if (object.payment_fee !== undefined && object.payment_fee !== null) {
            message.paymentFee = Coin.fromAmino(object.payment_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.recipient = message.recipient === "" ? undefined : message.recipient;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        obj.stream_type = message.streamType === 0 ? undefined : message.streamType;
        if (message.periods) {
            obj.periods = message.periods.map(e => e ? Period.toAmino(e) : undefined);
        }
        else {
            obj.periods = message.periods;
        }
        obj.cancellable = message.cancellable === false ? undefined : message.cancellable;
        obj.payment_fee = message.paymentFee ? Coin.toAmino(message.paymentFee) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStreamSend.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/streampay/MsgStreamSend",
            value: MsgStreamSend.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgStreamSend.decode(message.value);
    },
    toProto(message) {
        return MsgStreamSend.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
            value: MsgStreamSend.encode(message).finish()
        };
    }
};
function createBaseMsgStreamSendResponse() {
    return {
        streamId: ""
    };
}
export const MsgStreamSendResponse = {
    typeUrl: "/OmniFlix.streampay.v1.MsgStreamSendResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.streamId !== "") {
            writer.uint32(10).string(message.streamId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStreamSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgStreamSendResponse();
        message.streamId = object.streamId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStreamSendResponse();
        if (object.stream_id !== undefined && object.stream_id !== null) {
            message.streamId = object.stream_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.stream_id = message.streamId === "" ? undefined : message.streamId;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStreamSendResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgStreamSendResponse.decode(message.value);
    },
    toProto(message) {
        return MsgStreamSendResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.MsgStreamSendResponse",
            value: MsgStreamSendResponse.encode(message).finish()
        };
    }
};
function createBaseMsgStopStream() {
    return {
        streamId: "",
        sender: ""
    };
}
export const MsgStopStream = {
    typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
    encode(message, writer = BinaryWriter.create()) {
        if (message.streamId !== "") {
            writer.uint32(10).string(message.streamId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStopStream();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamId = reader.string();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgStopStream();
        message.streamId = object.streamId ?? "";
        message.sender = object.sender ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgStopStream();
        if (object.stream_id !== undefined && object.stream_id !== null) {
            message.streamId = object.stream_id;
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.stream_id = message.streamId === "" ? undefined : message.streamId;
        obj.sender = message.sender === "" ? undefined : message.sender;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStopStream.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/streampay/MsgStopStream",
            value: MsgStopStream.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgStopStream.decode(message.value);
    },
    toProto(message) {
        return MsgStopStream.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
            value: MsgStopStream.encode(message).finish()
        };
    }
};
function createBaseMsgStopStreamResponse() {
    return {};
}
export const MsgStopStreamResponse = {
    typeUrl: "/OmniFlix.streampay.v1.MsgStopStreamResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStopStreamResponse();
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
        const message = createBaseMsgStopStreamResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgStopStreamResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgStopStreamResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgStopStreamResponse.decode(message.value);
    },
    toProto(message) {
        return MsgStopStreamResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.MsgStopStreamResponse",
            value: MsgStopStreamResponse.encode(message).finish()
        };
    }
};
function createBaseMsgClaimStreamedAmount() {
    return {
        streamId: "",
        claimer: ""
    };
}
export const MsgClaimStreamedAmount = {
    typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.streamId !== "") {
            writer.uint32(10).string(message.streamId);
        }
        if (message.claimer !== "") {
            writer.uint32(18).string(message.claimer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimStreamedAmount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.streamId = reader.string();
                    break;
                case 2:
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
        const message = createBaseMsgClaimStreamedAmount();
        message.streamId = object.streamId ?? "";
        message.claimer = object.claimer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgClaimStreamedAmount();
        if (object.stream_id !== undefined && object.stream_id !== null) {
            message.streamId = object.stream_id;
        }
        if (object.claimer !== undefined && object.claimer !== null) {
            message.claimer = object.claimer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.stream_id = message.streamId === "" ? undefined : message.streamId;
        obj.claimer = message.claimer === "" ? undefined : message.claimer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaimStreamedAmount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "OmniFlix/streampay/MsgClaimStream",
            value: MsgClaimStreamedAmount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgClaimStreamedAmount.decode(message.value);
    },
    toProto(message) {
        return MsgClaimStreamedAmount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
            value: MsgClaimStreamedAmount.encode(message).finish()
        };
    }
};
function createBaseMsgClaimStreamedAmountResponse() {
    return {};
}
export const MsgClaimStreamedAmountResponse = {
    typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmountResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClaimStreamedAmountResponse();
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
        const message = createBaseMsgClaimStreamedAmountResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgClaimStreamedAmountResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgClaimStreamedAmountResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgClaimStreamedAmountResponse.decode(message.value);
    },
    toProto(message) {
        return MsgClaimStreamedAmountResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmountResponse",
            value: MsgClaimStreamedAmountResponse.encode(message).finish()
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
    typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
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
            typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParamsResponse",
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
            typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
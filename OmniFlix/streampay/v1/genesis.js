import { StreamPayment } from "./streampay";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
function createBaseGenesisState() {
    return {
        streamPayments: [],
        nextStreamPaymentNumber: BigInt(0),
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/OmniFlix.streampay.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.streamPayments) {
            StreamPayment.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.nextStreamPaymentNumber !== BigInt(0)) {
            writer.uint32(16).uint64(message.nextStreamPaymentNumber);
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
                    message.streamPayments.push(StreamPayment.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.nextStreamPaymentNumber = reader.uint64();
                    break;
                case 3:
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
        message.streamPayments = object.streamPayments?.map(e => StreamPayment.fromPartial(e)) || [];
        message.nextStreamPaymentNumber = object.nextStreamPaymentNumber !== undefined && object.nextStreamPaymentNumber !== null ? BigInt(object.nextStreamPaymentNumber.toString()) : BigInt(0);
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.streamPayments = object.stream_payments?.map(e => StreamPayment.fromAmino(e)) || [];
        if (object.next_stream_payment_number !== undefined && object.next_stream_payment_number !== null) {
            message.nextStreamPaymentNumber = BigInt(object.next_stream_payment_number);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.streamPayments) {
            obj.stream_payments = message.streamPayments.map(e => e ? StreamPayment.toAmino(e) : undefined);
        }
        else {
            obj.stream_payments = message.streamPayments;
        }
        obj.next_stream_payment_number = message.nextStreamPaymentNumber !== BigInt(0) ? message.nextStreamPaymentNumber?.toString() : undefined;
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
            typeUrl: "/OmniFlix.streampay.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
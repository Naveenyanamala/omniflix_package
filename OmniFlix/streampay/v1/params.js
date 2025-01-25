import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { Decimal } from "@cosmjs/math";
function createBaseParams() {
    return {
        streamPaymentFeePercentage: ""
    };
}
export const Params = {
    typeUrl: "/OmniFlix.streampay.v1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.streamPaymentFeePercentage !== "") {
            writer.uint32(10).string(Decimal.fromUserInput(message.streamPaymentFeePercentage, 18).atomics);
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
                    message.streamPaymentFeePercentage = Decimal.fromAtomics(reader.string(), 18).toString();
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
        message.streamPaymentFeePercentage = object.streamPaymentFeePercentage ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.stream_payment_fee_percentage !== undefined && object.stream_payment_fee_percentage !== null) {
            message.streamPaymentFeePercentage = object.stream_payment_fee_percentage;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.stream_payment_fee_percentage = message.streamPaymentFeePercentage === "" ? undefined : message.streamPaymentFeePercentage;
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
            typeUrl: "/OmniFlix.streampay.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
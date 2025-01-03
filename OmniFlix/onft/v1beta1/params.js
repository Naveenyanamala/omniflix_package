import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
function createBaseParams() {
    return {
        denomCreationFee: Coin.fromPartial({})
    };
}
export const Params = {
    typeUrl: "/OmniFlix.onft.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.denomCreationFee !== undefined) {
            Coin.encode(message.denomCreationFee, writer.uint32(10).fork()).ldelim();
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
                    message.denomCreationFee = Coin.decode(reader, reader.uint32());
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
        message.denomCreationFee = object.denomCreationFee !== undefined && object.denomCreationFee !== null ? Coin.fromPartial(object.denomCreationFee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.denom_creation_fee !== undefined && object.denom_creation_fee !== null) {
            message.denomCreationFee = Coin.fromAmino(object.denom_creation_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.denom_creation_fee = message.denomCreationFee ? Coin.toAmino(message.denomCreationFee) : undefined;
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
            typeUrl: "/OmniFlix.onft.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
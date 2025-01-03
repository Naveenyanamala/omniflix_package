import { Collection } from "./onft";
import { Params } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        collections: [],
        params: Params.fromPartial({})
    };
}
export const GenesisState = {
    typeUrl: "/OmniFlix.onft.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.collections) {
            Collection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
                    message.collections.push(Collection.decode(reader, reader.uint32()));
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
        const message = createBaseGenesisState();
        message.collections = object.collections?.map(e => Collection.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        message.collections = object.collections?.map(e => Collection.fromAmino(e)) || [];
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.collections) {
            obj.collections = message.collections.map(e => e ? Collection.toAmino(e) : undefined);
        }
        else {
            obj.collections = message.collections;
        }
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
            typeUrl: "/OmniFlix.onft.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
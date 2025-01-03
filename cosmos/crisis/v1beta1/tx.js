import { Coin } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseMsgVerifyInvariant() {
    return {
        sender: "",
        invariantModuleName: "",
        invariantRoute: ""
    };
}
export const MsgVerifyInvariant = {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invariantModuleName !== "") {
            writer.uint32(18).string(message.invariantModuleName);
        }
        if (message.invariantRoute !== "") {
            writer.uint32(26).string(message.invariantRoute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invariantModuleName = reader.string();
                    break;
                case 3:
                    message.invariantRoute = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseMsgVerifyInvariant();
        message.sender = object.sender ?? "";
        message.invariantModuleName = object.invariantModuleName ?? "";
        message.invariantRoute = object.invariantRoute ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVerifyInvariant();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        if (object.invariant_module_name !== undefined && object.invariant_module_name !== null) {
            message.invariantModuleName = object.invariant_module_name;
        }
        if (object.invariant_route !== undefined && object.invariant_route !== null) {
            message.invariantRoute = object.invariant_route;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender === "" ? undefined : message.sender;
        obj.invariant_module_name = message.invariantModuleName === "" ? undefined : message.invariantModuleName;
        obj.invariant_route = message.invariantRoute === "" ? undefined : message.invariantRoute;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVerifyInvariant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariant",
            value: MsgVerifyInvariant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVerifyInvariant.decode(message.value);
    },
    toProto(message) {
        return MsgVerifyInvariant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
            value: MsgVerifyInvariant.encode(message).finish()
        };
    }
};
function createBaseMsgVerifyInvariantResponse() {
    return {};
}
export const MsgVerifyInvariantResponse = {
    typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariantResponse();
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
        const message = createBaseMsgVerifyInvariantResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVerifyInvariantResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVerifyInvariantResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVerifyInvariantResponse",
            value: MsgVerifyInvariantResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVerifyInvariantResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVerifyInvariantResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
            value: MsgVerifyInvariantResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParams() {
    return {
        authority: "",
        constantFee: Coin.fromPartial({})
    };
}
export const MsgUpdateParams = {
    typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
    encode(message, writer = BinaryWriter.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.constantFee !== undefined) {
            Coin.encode(message.constantFee, writer.uint32(18).fork()).ldelim();
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
                    message.constantFee = Coin.decode(reader, reader.uint32());
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
        message.constantFee = object.constantFee !== undefined && object.constantFee !== null ? Coin.fromPartial(object.constantFee) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgUpdateParams();
        if (object.authority !== undefined && object.authority !== null) {
            message.authority = object.authority;
        }
        if (object.constant_fee !== undefined && object.constant_fee !== null) {
            message.constantFee = Coin.fromAmino(object.constant_fee);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.authority = message.authority === "" ? undefined : message.authority;
        obj.constant_fee = message.constantFee ? Coin.toAmino(message.constantFee) : Coin.toAmino(Coin.fromPartial({}));
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUpdateParams.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/crisis/MsgUpdateParams",
            value: MsgUpdateParams.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParams.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
            value: MsgUpdateParams.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateParamsResponse() {
    return {};
}
export const MsgUpdateParamsResponse = {
    typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParamsResponse",
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
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUpdateParamsResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUpdateParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParamsResponse",
            value: MsgUpdateParamsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map
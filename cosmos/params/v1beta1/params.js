import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseParameterChangeProposal() {
    return {
        $typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
        title: "",
        description: "",
        changes: []
    };
}
export const ParameterChangeProposal = {
    typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        for (const v of message.changes) {
            ParamChange.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParameterChangeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.changes.push(ParamChange.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParameterChangeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.changes = object.changes?.map(e => ParamChange.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParameterChangeProposal();
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        message.changes = object.changes?.map(e => ParamChange.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title === "" ? undefined : message.title;
        obj.description = message.description === "" ? undefined : message.description;
        if (message.changes) {
            obj.changes = message.changes.map(e => e ? ParamChange.toAmino(e) : undefined);
        }
        else {
            obj.changes = message.changes;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ParameterChangeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ParameterChangeProposal",
            value: ParameterChangeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ParameterChangeProposal.decode(message.value);
    },
    toProto(message) {
        return ParameterChangeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
            value: ParameterChangeProposal.encode(message).finish()
        };
    }
};
function createBaseParamChange() {
    return {
        subspace: "",
        key: "",
        value: ""
    };
}
export const ParamChange = {
    typeUrl: "/cosmos.params.v1beta1.ParamChange",
    encode(message, writer = BinaryWriter.create()) {
        if (message.subspace !== "") {
            writer.uint32(10).string(message.subspace);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(26).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParamChange();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.subspace = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                case 3:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseParamChange();
        message.subspace = object.subspace ?? "";
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseParamChange();
        if (object.subspace !== undefined && object.subspace !== null) {
            message.subspace = object.subspace;
        }
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.subspace = message.subspace === "" ? undefined : message.subspace;
        obj.key = message.key === "" ? undefined : message.key;
        obj.value = message.value === "" ? undefined : message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return ParamChange.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ParamChange",
            value: ParamChange.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ParamChange.decode(message.value);
    },
    toProto(message) {
        return ParamChange.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.params.v1beta1.ParamChange",
            value: ParamChange.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map
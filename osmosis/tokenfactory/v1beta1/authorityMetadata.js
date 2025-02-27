import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseDenomAuthorityMetadata() {
    return {
        admin: ""
    };
}
export const DenomAuthorityMetadata = {
    typeUrl: "/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.admin !== "") {
            writer.uint32(10).string(message.admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenomAuthorityMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.admin = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseDenomAuthorityMetadata();
        message.admin = object.admin ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseDenomAuthorityMetadata();
        if (object.admin !== undefined && object.admin !== null) {
            message.admin = object.admin;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.admin = message.admin === "" ? undefined : message.admin;
        return obj;
    },
    fromAminoMsg(object) {
        return DenomAuthorityMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "osmosis/tokenfactory/denom-authority-metadata",
            value: DenomAuthorityMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return DenomAuthorityMetadata.decode(message.value);
    },
    toProto(message) {
        return DenomAuthorityMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/osmosis.tokenfactory.v1beta1.DenomAuthorityMetadata",
            value: DenomAuthorityMetadata.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authorityMetadata.js.map
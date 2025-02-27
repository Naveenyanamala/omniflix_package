import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseBaseAccount() {
    return {
        $typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
        address: "",
        pubKey: undefined,
        accountNumber: BigInt(0),
        sequence: BigInt(0)
    };
}
export const BaseAccount = {
    typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pubKey !== undefined) {
            Any.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.accountNumber !== BigInt(0)) {
            writer.uint32(24).uint64(message.accountNumber);
        }
        if (message.sequence !== BigInt(0)) {
            writer.uint32(32).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pubKey = Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.accountNumber = reader.uint64();
                    break;
                case 4:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBaseAccount();
        message.address = object.address ?? "";
        message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? Any.fromPartial(object.pubKey) : undefined;
        message.accountNumber = object.accountNumber !== undefined && object.accountNumber !== null ? BigInt(object.accountNumber.toString()) : BigInt(0);
        message.sequence = object.sequence !== undefined && object.sequence !== null ? BigInt(object.sequence.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseBaseAccount();
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = Any.fromAmino(object.pub_key);
        }
        if (object.account_number !== undefined && object.account_number !== null) {
            message.accountNumber = BigInt(object.account_number);
        }
        if (object.sequence !== undefined && object.sequence !== null) {
            message.sequence = BigInt(object.sequence);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address === "" ? undefined : message.address;
        obj.pub_key = message.pubKey ? Any.toAmino(message.pubKey) : undefined;
        obj.account_number = message.accountNumber !== BigInt(0) ? message.accountNumber?.toString() : undefined;
        obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BaseAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BaseAccount",
            value: BaseAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BaseAccount.decode(message.value);
    },
    toProto(message) {
        return BaseAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.BaseAccount",
            value: BaseAccount.encode(message).finish()
        };
    }
};
function createBaseModuleAccount() {
    return {
        $typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
        baseAccount: undefined,
        name: "",
        permissions: []
    };
}
export const ModuleAccount = {
    typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
    encode(message, writer = BinaryWriter.create()) {
        if (message.baseAccount !== undefined) {
            BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.permissions) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.permissions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleAccount();
        message.baseAccount = object.baseAccount !== undefined && object.baseAccount !== null ? BaseAccount.fromPartial(object.baseAccount) : undefined;
        message.name = object.name ?? "";
        message.permissions = object.permissions?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleAccount();
        if (object.base_account !== undefined && object.base_account !== null) {
            message.baseAccount = BaseAccount.fromAmino(object.base_account);
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        message.permissions = object.permissions?.map(e => e) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.base_account = message.baseAccount ? BaseAccount.toAmino(message.baseAccount) : undefined;
        obj.name = message.name === "" ? undefined : message.name;
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => e);
        }
        else {
            obj.permissions = message.permissions;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleAccount.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleAccount",
            value: ModuleAccount.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleAccount.decode(message.value);
    },
    toProto(message) {
        return ModuleAccount.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.ModuleAccount",
            value: ModuleAccount.encode(message).finish()
        };
    }
};
function createBaseModuleCredential() {
    return {
        moduleName: "",
        derivationKeys: []
    };
}
export const ModuleCredential = {
    typeUrl: "/cosmos.auth.v1beta1.ModuleCredential",
    encode(message, writer = BinaryWriter.create()) {
        if (message.moduleName !== "") {
            writer.uint32(10).string(message.moduleName);
        }
        for (const v of message.derivationKeys) {
            writer.uint32(18).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModuleCredential();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moduleName = reader.string();
                    break;
                case 2:
                    message.derivationKeys.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseModuleCredential();
        message.moduleName = object.moduleName ?? "";
        message.derivationKeys = object.derivationKeys?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseModuleCredential();
        if (object.module_name !== undefined && object.module_name !== null) {
            message.moduleName = object.module_name;
        }
        message.derivationKeys = object.derivation_keys?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.module_name = message.moduleName === "" ? undefined : message.moduleName;
        if (message.derivationKeys) {
            obj.derivation_keys = message.derivationKeys.map(e => base64FromBytes(e));
        }
        else {
            obj.derivation_keys = message.derivationKeys;
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ModuleCredential.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ModuleCredential",
            value: ModuleCredential.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ModuleCredential.decode(message.value);
    },
    toProto(message) {
        return ModuleCredential.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.ModuleCredential",
            value: ModuleCredential.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        maxMemoCharacters: BigInt(0),
        txSigLimit: BigInt(0),
        txSizeCostPerByte: BigInt(0),
        sigVerifyCostEd25519: BigInt(0),
        sigVerifyCostSecp256k1: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/cosmos.auth.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.maxMemoCharacters !== BigInt(0)) {
            writer.uint32(8).uint64(message.maxMemoCharacters);
        }
        if (message.txSigLimit !== BigInt(0)) {
            writer.uint32(16).uint64(message.txSigLimit);
        }
        if (message.txSizeCostPerByte !== BigInt(0)) {
            writer.uint32(24).uint64(message.txSizeCostPerByte);
        }
        if (message.sigVerifyCostEd25519 !== BigInt(0)) {
            writer.uint32(32).uint64(message.sigVerifyCostEd25519);
        }
        if (message.sigVerifyCostSecp256k1 !== BigInt(0)) {
            writer.uint32(40).uint64(message.sigVerifyCostSecp256k1);
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
                    message.maxMemoCharacters = reader.uint64();
                    break;
                case 2:
                    message.txSigLimit = reader.uint64();
                    break;
                case 3:
                    message.txSizeCostPerByte = reader.uint64();
                    break;
                case 4:
                    message.sigVerifyCostEd25519 = reader.uint64();
                    break;
                case 5:
                    message.sigVerifyCostSecp256k1 = reader.uint64();
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
        message.maxMemoCharacters = object.maxMemoCharacters !== undefined && object.maxMemoCharacters !== null ? BigInt(object.maxMemoCharacters.toString()) : BigInt(0);
        message.txSigLimit = object.txSigLimit !== undefined && object.txSigLimit !== null ? BigInt(object.txSigLimit.toString()) : BigInt(0);
        message.txSizeCostPerByte = object.txSizeCostPerByte !== undefined && object.txSizeCostPerByte !== null ? BigInt(object.txSizeCostPerByte.toString()) : BigInt(0);
        message.sigVerifyCostEd25519 = object.sigVerifyCostEd25519 !== undefined && object.sigVerifyCostEd25519 !== null ? BigInt(object.sigVerifyCostEd25519.toString()) : BigInt(0);
        message.sigVerifyCostSecp256k1 = object.sigVerifyCostSecp256k1 !== undefined && object.sigVerifyCostSecp256k1 !== null ? BigInt(object.sigVerifyCostSecp256k1.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.max_memo_characters !== undefined && object.max_memo_characters !== null) {
            message.maxMemoCharacters = BigInt(object.max_memo_characters);
        }
        if (object.tx_sig_limit !== undefined && object.tx_sig_limit !== null) {
            message.txSigLimit = BigInt(object.tx_sig_limit);
        }
        if (object.tx_size_cost_per_byte !== undefined && object.tx_size_cost_per_byte !== null) {
            message.txSizeCostPerByte = BigInt(object.tx_size_cost_per_byte);
        }
        if (object.sig_verify_cost_ed25519 !== undefined && object.sig_verify_cost_ed25519 !== null) {
            message.sigVerifyCostEd25519 = BigInt(object.sig_verify_cost_ed25519);
        }
        if (object.sig_verify_cost_secp256k1 !== undefined && object.sig_verify_cost_secp256k1 !== null) {
            message.sigVerifyCostSecp256k1 = BigInt(object.sig_verify_cost_secp256k1);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.max_memo_characters = message.maxMemoCharacters !== BigInt(0) ? message.maxMemoCharacters?.toString() : undefined;
        obj.tx_sig_limit = message.txSigLimit !== BigInt(0) ? message.txSigLimit?.toString() : undefined;
        obj.tx_size_cost_per_byte = message.txSizeCostPerByte !== BigInt(0) ? message.txSizeCostPerByte?.toString() : undefined;
        obj.sig_verify_cost_ed25519 = message.sigVerifyCostEd25519 !== BigInt(0) ? message.sigVerifyCostEd25519?.toString() : undefined;
        obj.sig_verify_cost_secp256k1 = message.sigVerifyCostSecp256k1 !== BigInt(0) ? message.sigVerifyCostSecp256k1?.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/x/auth/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.auth.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=auth.js.map
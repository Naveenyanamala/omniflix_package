import { Data, Commit, BlockID } from "../../../../tendermint/types/types";
import { EvidenceList } from "../../../../tendermint/types/evidence";
import { Consensus } from "../../../../tendermint/version/types";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { toTimestamp, fromTimestamp, bytesFromBase64, base64FromBytes } from "../../../../helpers";
function createBaseBlock() {
    return {
        header: Header.fromPartial({}),
        data: Data.fromPartial({}),
        evidence: EvidenceList.fromPartial({}),
        lastCommit: undefined
    };
}
export const Block = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
    encode(message, writer = BinaryWriter.create()) {
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.lastCommit !== undefined) {
            Commit.encode(message.lastCommit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.lastCommit = Commit.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseBlock();
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.data = object.data !== undefined && object.data !== null ? Data.fromPartial(object.data) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? EvidenceList.fromPartial(object.evidence) : undefined;
        message.lastCommit = object.lastCommit !== undefined && object.lastCommit !== null ? Commit.fromPartial(object.lastCommit) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseBlock();
        if (object.header !== undefined && object.header !== null) {
            message.header = Header.fromAmino(object.header);
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = Data.fromAmino(object.data);
        }
        if (object.evidence !== undefined && object.evidence !== null) {
            message.evidence = EvidenceList.fromAmino(object.evidence);
        }
        if (object.last_commit !== undefined && object.last_commit !== null) {
            message.lastCommit = Commit.fromAmino(object.last_commit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? Header.toAmino(message.header) : Header.toAmino(Header.fromPartial({}));
        obj.data = message.data ? Data.toAmino(message.data) : Data.toAmino(Data.fromPartial({}));
        obj.evidence = message.evidence ? EvidenceList.toAmino(message.evidence) : EvidenceList.toAmino(EvidenceList.fromPartial({}));
        obj.last_commit = message.lastCommit ? Commit.toAmino(message.lastCommit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Block.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Block",
            value: Block.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Block.decode(message.value);
    },
    toProto(message) {
        return Block.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Block",
            value: Block.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        version: Consensus.fromPartial({}),
        chainId: "",
        height: BigInt(0),
        time: new Date(),
        lastBlockId: BlockID.fromPartial({}),
        lastCommitHash: new Uint8Array(),
        dataHash: new Uint8Array(),
        validatorsHash: new Uint8Array(),
        nextValidatorsHash: new Uint8Array(),
        consensusHash: new Uint8Array(),
        appHash: new Uint8Array(),
        lastResultsHash: new Uint8Array(),
        evidenceHash: new Uint8Array(),
        proposerAddress: ""
    };
}
export const Header = {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
    encode(message, writer = BinaryWriter.create()) {
        if (message.version !== undefined) {
            Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        if (message.height !== BigInt(0)) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.lastBlockId !== undefined) {
            BlockID.encode(message.lastBlockId, writer.uint32(42).fork()).ldelim();
        }
        if (message.lastCommitHash.length !== 0) {
            writer.uint32(50).bytes(message.lastCommitHash);
        }
        if (message.dataHash.length !== 0) {
            writer.uint32(58).bytes(message.dataHash);
        }
        if (message.validatorsHash.length !== 0) {
            writer.uint32(66).bytes(message.validatorsHash);
        }
        if (message.nextValidatorsHash.length !== 0) {
            writer.uint32(74).bytes(message.nextValidatorsHash);
        }
        if (message.consensusHash.length !== 0) {
            writer.uint32(82).bytes(message.consensusHash);
        }
        if (message.appHash.length !== 0) {
            writer.uint32(90).bytes(message.appHash);
        }
        if (message.lastResultsHash.length !== 0) {
            writer.uint32(98).bytes(message.lastResultsHash);
        }
        if (message.evidenceHash.length !== 0) {
            writer.uint32(106).bytes(message.evidenceHash);
        }
        if (message.proposerAddress !== "") {
            writer.uint32(114).string(message.proposerAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.lastBlockId = BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.lastCommitHash = reader.bytes();
                    break;
                case 7:
                    message.dataHash = reader.bytes();
                    break;
                case 8:
                    message.validatorsHash = reader.bytes();
                    break;
                case 9:
                    message.nextValidatorsHash = reader.bytes();
                    break;
                case 10:
                    message.consensusHash = reader.bytes();
                    break;
                case 11:
                    message.appHash = reader.bytes();
                    break;
                case 12:
                    message.lastResultsHash = reader.bytes();
                    break;
                case 13:
                    message.evidenceHash = reader.bytes();
                    break;
                case 14:
                    message.proposerAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? Consensus.fromPartial(object.version) : undefined;
        message.chainId = object.chainId ?? "";
        message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
        message.time = object.time ?? undefined;
        message.lastBlockId = object.lastBlockId !== undefined && object.lastBlockId !== null ? BlockID.fromPartial(object.lastBlockId) : undefined;
        message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
        message.dataHash = object.dataHash ?? new Uint8Array();
        message.validatorsHash = object.validatorsHash ?? new Uint8Array();
        message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
        message.consensusHash = object.consensusHash ?? new Uint8Array();
        message.appHash = object.appHash ?? new Uint8Array();
        message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
        message.evidenceHash = object.evidenceHash ?? new Uint8Array();
        message.proposerAddress = object.proposerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseHeader();
        if (object.version !== undefined && object.version !== null) {
            message.version = Consensus.fromAmino(object.version);
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = object.chain_id;
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = BigInt(object.height);
        }
        if (object.time !== undefined && object.time !== null) {
            message.time = fromTimestamp(Timestamp.fromAmino(object.time));
        }
        if (object.last_block_id !== undefined && object.last_block_id !== null) {
            message.lastBlockId = BlockID.fromAmino(object.last_block_id);
        }
        if (object.last_commit_hash !== undefined && object.last_commit_hash !== null) {
            message.lastCommitHash = bytesFromBase64(object.last_commit_hash);
        }
        if (object.data_hash !== undefined && object.data_hash !== null) {
            message.dataHash = bytesFromBase64(object.data_hash);
        }
        if (object.validators_hash !== undefined && object.validators_hash !== null) {
            message.validatorsHash = bytesFromBase64(object.validators_hash);
        }
        if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
            message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
        }
        if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
            message.consensusHash = bytesFromBase64(object.consensus_hash);
        }
        if (object.app_hash !== undefined && object.app_hash !== null) {
            message.appHash = bytesFromBase64(object.app_hash);
        }
        if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
            message.lastResultsHash = bytesFromBase64(object.last_results_hash);
        }
        if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
            message.evidenceHash = bytesFromBase64(object.evidence_hash);
        }
        if (object.proposer_address !== undefined && object.proposer_address !== null) {
            message.proposerAddress = object.proposer_address;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? Consensus.toAmino(message.version) : Consensus.toAmino(Consensus.fromPartial({}));
        obj.chain_id = message.chainId === "" ? undefined : message.chainId;
        obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
        obj.time = message.time ? Timestamp.toAmino(toTimestamp(message.time)) : new Date();
        obj.last_block_id = message.lastBlockId ? BlockID.toAmino(message.lastBlockId) : BlockID.toAmino(BlockID.fromPartial({}));
        obj.last_commit_hash = message.lastCommitHash ? base64FromBytes(message.lastCommitHash) : undefined;
        obj.data_hash = message.dataHash ? base64FromBytes(message.dataHash) : undefined;
        obj.validators_hash = message.validatorsHash ? base64FromBytes(message.validatorsHash) : undefined;
        obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : undefined;
        obj.consensus_hash = message.consensusHash ? base64FromBytes(message.consensusHash) : undefined;
        obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
        obj.last_results_hash = message.lastResultsHash ? base64FromBytes(message.lastResultsHash) : undefined;
        obj.evidence_hash = message.evidenceHash ? base64FromBytes(message.evidenceHash) : undefined;
        obj.proposer_address = message.proposerAddress === "" ? undefined : message.proposerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.tendermint.v1beta1.Header",
            value: Header.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map
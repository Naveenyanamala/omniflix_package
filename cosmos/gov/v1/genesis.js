import { Deposit, Vote, Proposal, DepositParams, VotingParams, TallyParams, Params } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
function createBaseGenesisState() {
    return {
        startingProposalId: BigInt(0),
        deposits: [],
        votes: [],
        proposals: [],
        depositParams: undefined,
        votingParams: undefined,
        tallyParams: undefined,
        params: undefined
    };
}
export const GenesisState = {
    typeUrl: "/cosmos.gov.v1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.startingProposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.startingProposalId);
        }
        for (const v of message.deposits) {
            Deposit.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.votes) {
            Vote.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.proposals) {
            Proposal.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.depositParams !== undefined) {
            DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
        }
        if (message.votingParams !== undefined) {
            VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
        }
        if (message.tallyParams !== undefined) {
            TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(66).fork()).ldelim();
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
                    message.startingProposalId = reader.uint64();
                    break;
                case 2:
                    message.deposits.push(Deposit.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.votes.push(Vote.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.proposals.push(Proposal.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.depositParams = DepositParams.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.votingParams = VotingParams.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.tallyParams = TallyParams.decode(reader, reader.uint32());
                    break;
                case 8:
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
        message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? BigInt(object.startingProposalId.toString()) : BigInt(0);
        message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
        message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
        message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
        message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
        message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
        message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.starting_proposal_id !== undefined && object.starting_proposal_id !== null) {
            message.startingProposalId = BigInt(object.starting_proposal_id);
        }
        message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
        message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
        message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
        if (object.deposit_params !== undefined && object.deposit_params !== null) {
            message.depositParams = DepositParams.fromAmino(object.deposit_params);
        }
        if (object.voting_params !== undefined && object.voting_params !== null) {
            message.votingParams = VotingParams.fromAmino(object.voting_params);
        }
        if (object.tally_params !== undefined && object.tally_params !== null) {
            message.tallyParams = TallyParams.fromAmino(object.tally_params);
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.starting_proposal_id = message.startingProposalId !== BigInt(0) ? message.startingProposalId?.toString() : undefined;
        if (message.deposits) {
            obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
        }
        else {
            obj.deposits = message.deposits;
        }
        if (message.votes) {
            obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
        }
        else {
            obj.votes = message.votes;
        }
        if (message.proposals) {
            obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
        }
        else {
            obj.proposals = message.proposals;
        }
        obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
        obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
        obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/v1/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map
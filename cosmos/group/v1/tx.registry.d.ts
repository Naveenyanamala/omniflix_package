import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateGroup, MsgUpdateGroupMembers, MsgUpdateGroupAdmin, MsgUpdateGroupMetadata, MsgCreateGroupPolicy, MsgCreateGroupWithPolicy, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyMetadata, MsgSubmitProposal, MsgWithdrawProposal, MsgVote, MsgExec, MsgLeaveGroup } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: MsgCreateGroupPolicy;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: MsgCreateGroupWithPolicy;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyAdmin;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyDecisionPolicy;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyMetadata;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: MsgWithdrawProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: MsgLeaveGroup;
        };
    };
    fromPartial: {
        createGroup(value: MsgCreateGroup): {
            typeUrl: string;
            value: MsgCreateGroup;
        };
        updateGroupMembers(value: MsgUpdateGroupMembers): {
            typeUrl: string;
            value: MsgUpdateGroupMembers;
        };
        updateGroupAdmin(value: MsgUpdateGroupAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupAdmin;
        };
        updateGroupMetadata(value: MsgUpdateGroupMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupMetadata;
        };
        createGroupPolicy(value: MsgCreateGroupPolicy): {
            typeUrl: string;
            value: MsgCreateGroupPolicy;
        };
        createGroupWithPolicy(value: MsgCreateGroupWithPolicy): {
            typeUrl: string;
            value: MsgCreateGroupWithPolicy;
        };
        updateGroupPolicyAdmin(value: MsgUpdateGroupPolicyAdmin): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyAdmin;
        };
        updateGroupPolicyDecisionPolicy(value: MsgUpdateGroupPolicyDecisionPolicy): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyDecisionPolicy;
        };
        updateGroupPolicyMetadata(value: MsgUpdateGroupPolicyMetadata): {
            typeUrl: string;
            value: MsgUpdateGroupPolicyMetadata;
        };
        submitProposal(value: MsgSubmitProposal): {
            typeUrl: string;
            value: MsgSubmitProposal;
        };
        withdrawProposal(value: MsgWithdrawProposal): {
            typeUrl: string;
            value: MsgWithdrawProposal;
        };
        vote(value: MsgVote): {
            typeUrl: string;
            value: MsgVote;
        };
        exec(value: MsgExec): {
            typeUrl: string;
            value: MsgExec;
        };
        leaveGroup(value: MsgLeaveGroup): {
            typeUrl: string;
            value: MsgLeaveGroup;
        };
    };
};

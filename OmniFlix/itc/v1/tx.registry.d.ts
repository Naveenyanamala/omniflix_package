import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateCampaign, MsgCancelCampaign, MsgClaim, MsgDepositCampaign, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createCampaign(value: MsgCreateCampaign): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        cancelCampaign(value: MsgCancelCampaign): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        claim(value: MsgClaim): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        depositCampaign(value: MsgDepositCampaign): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        createCampaign(value: MsgCreateCampaign): {
            typeUrl: string;
            value: MsgCreateCampaign;
        };
        cancelCampaign(value: MsgCancelCampaign): {
            typeUrl: string;
            value: MsgCancelCampaign;
        };
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        depositCampaign(value: MsgDepositCampaign): {
            typeUrl: string;
            value: MsgDepositCampaign;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createCampaign(value: MsgCreateCampaign): {
            typeUrl: string;
            value: MsgCreateCampaign;
        };
        cancelCampaign(value: MsgCancelCampaign): {
            typeUrl: string;
            value: MsgCancelCampaign;
        };
        claim(value: MsgClaim): {
            typeUrl: string;
            value: MsgClaim;
        };
        depositCampaign(value: MsgDepositCampaign): {
            typeUrl: string;
            value: MsgDepositCampaign;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};

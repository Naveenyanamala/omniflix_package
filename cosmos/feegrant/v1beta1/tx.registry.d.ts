import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgGrantAllowance, MsgRevokeAllowance } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
    };
    fromPartial: {
        grantAllowance(value: MsgGrantAllowance): {
            typeUrl: string;
            value: MsgGrantAllowance;
        };
        revokeAllowance(value: MsgRevokeAllowance): {
            typeUrl: string;
            value: MsgRevokeAllowance;
        };
    };
};

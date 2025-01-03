import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateVestingAccount, MsgCreatePermanentLockedAccount, MsgCreatePeriodicVestingAccount } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
            typeUrl: string;
            value: MsgCreatePermanentLockedAccount;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
    };
    fromPartial: {
        createVestingAccount(value: MsgCreateVestingAccount): {
            typeUrl: string;
            value: MsgCreateVestingAccount;
        };
        createPermanentLockedAccount(value: MsgCreatePermanentLockedAccount): {
            typeUrl: string;
            value: MsgCreatePermanentLockedAccount;
        };
        createPeriodicVestingAccount(value: MsgCreatePeriodicVestingAccount): {
            typeUrl: string;
            value: MsgCreatePeriodicVestingAccount;
        };
    };
};

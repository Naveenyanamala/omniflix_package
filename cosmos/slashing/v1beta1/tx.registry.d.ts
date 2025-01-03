import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUnjail, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: MsgUnjail;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        unjail(value: MsgUnjail): {
            typeUrl: string;
            value: MsgUnjail;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};

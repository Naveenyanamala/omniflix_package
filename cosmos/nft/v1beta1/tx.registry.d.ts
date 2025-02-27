import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSend } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        send(value: MsgSend): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
    };
    fromPartial: {
        send(value: MsgSend): {
            typeUrl: string;
            value: MsgSend;
        };
    };
};

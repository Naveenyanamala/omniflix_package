import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgUpdateDenom, MsgTransferDenom, MsgPurgeDenom, MsgMintONFT, MsgTransferONFT, MsgBurnONFT, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateDenom(value: MsgUpdateDenom): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        transferDenom(value: MsgTransferDenom): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        purgeDenom(value: MsgPurgeDenom): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        mintONFT(value: MsgMintONFT): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        transferONFT(value: MsgTransferONFT): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        burnONFT(value: MsgBurnONFT): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        updateDenom(value: MsgUpdateDenom): {
            typeUrl: string;
            value: MsgUpdateDenom;
        };
        transferDenom(value: MsgTransferDenom): {
            typeUrl: string;
            value: MsgTransferDenom;
        };
        purgeDenom(value: MsgPurgeDenom): {
            typeUrl: string;
            value: MsgPurgeDenom;
        };
        mintONFT(value: MsgMintONFT): {
            typeUrl: string;
            value: MsgMintONFT;
        };
        transferONFT(value: MsgTransferONFT): {
            typeUrl: string;
            value: MsgTransferONFT;
        };
        burnONFT(value: MsgBurnONFT): {
            typeUrl: string;
            value: MsgBurnONFT;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        createDenom(value: MsgCreateDenom): {
            typeUrl: string;
            value: MsgCreateDenom;
        };
        updateDenom(value: MsgUpdateDenom): {
            typeUrl: string;
            value: MsgUpdateDenom;
        };
        transferDenom(value: MsgTransferDenom): {
            typeUrl: string;
            value: MsgTransferDenom;
        };
        purgeDenom(value: MsgPurgeDenom): {
            typeUrl: string;
            value: MsgPurgeDenom;
        };
        mintONFT(value: MsgMintONFT): {
            typeUrl: string;
            value: MsgMintONFT;
        };
        transferONFT(value: MsgTransferONFT): {
            typeUrl: string;
            value: MsgTransferONFT;
        };
        burnONFT(value: MsgBurnONFT): {
            typeUrl: string;
            value: MsgBurnONFT;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};

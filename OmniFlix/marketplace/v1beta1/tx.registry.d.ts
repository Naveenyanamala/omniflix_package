import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgListNFT, MsgEditListing, MsgDeListNFT, MsgBuyNFT, MsgCreateAuction, MsgCancelAuction, MsgPlaceBid, MsgUpdateParams } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        listNFT(value: MsgListNFT): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        editListing(value: MsgEditListing): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        deListNFT(value: MsgDeListNFT): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        buyNFT(value: MsgBuyNFT): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        createAuction(value: MsgCreateAuction): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        cancelAuction(value: MsgCancelAuction): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: Uint8Array<ArrayBufferLike>;
        };
    };
    withTypeUrl: {
        listNFT(value: MsgListNFT): {
            typeUrl: string;
            value: MsgListNFT;
        };
        editListing(value: MsgEditListing): {
            typeUrl: string;
            value: MsgEditListing;
        };
        deListNFT(value: MsgDeListNFT): {
            typeUrl: string;
            value: MsgDeListNFT;
        };
        buyNFT(value: MsgBuyNFT): {
            typeUrl: string;
            value: MsgBuyNFT;
        };
        createAuction(value: MsgCreateAuction): {
            typeUrl: string;
            value: MsgCreateAuction;
        };
        cancelAuction(value: MsgCancelAuction): {
            typeUrl: string;
            value: MsgCancelAuction;
        };
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
    fromPartial: {
        listNFT(value: MsgListNFT): {
            typeUrl: string;
            value: MsgListNFT;
        };
        editListing(value: MsgEditListing): {
            typeUrl: string;
            value: MsgEditListing;
        };
        deListNFT(value: MsgDeListNFT): {
            typeUrl: string;
            value: MsgDeListNFT;
        };
        buyNFT(value: MsgBuyNFT): {
            typeUrl: string;
            value: MsgBuyNFT;
        };
        createAuction(value: MsgCreateAuction): {
            typeUrl: string;
            value: MsgCreateAuction;
        };
        cancelAuction(value: MsgCancelAuction): {
            typeUrl: string;
            value: MsgCancelAuction;
        };
        placeBid(value: MsgPlaceBid): {
            typeUrl: string;
            value: MsgPlaceBid;
        };
        updateParams(value: MsgUpdateParams): {
            typeUrl: string;
            value: MsgUpdateParams;
        };
    };
};

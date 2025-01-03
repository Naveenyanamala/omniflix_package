import { MsgListNFT, MsgEditListing, MsgDeListNFT, MsgBuyNFT, MsgCreateAuction, MsgCancelAuction, MsgPlaceBid, MsgUpdateParams } from "./tx";
export const registry = [["/OmniFlix.marketplace.v1beta1.MsgListNFT", MsgListNFT], ["/OmniFlix.marketplace.v1beta1.MsgEditListing", MsgEditListing], ["/OmniFlix.marketplace.v1beta1.MsgDeListNFT", MsgDeListNFT], ["/OmniFlix.marketplace.v1beta1.MsgBuyNFT", MsgBuyNFT], ["/OmniFlix.marketplace.v1beta1.MsgCreateAuction", MsgCreateAuction], ["/OmniFlix.marketplace.v1beta1.MsgCancelAuction", MsgCancelAuction], ["/OmniFlix.marketplace.v1beta1.MsgPlaceBid", MsgPlaceBid], ["/OmniFlix.marketplace.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        listNFT(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
                value: MsgListNFT.encode(value).finish()
            };
        },
        editListing(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
                value: MsgEditListing.encode(value).finish()
            };
        },
        deListNFT(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
                value: MsgDeListNFT.encode(value).finish()
            };
        },
        buyNFT(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
                value: MsgBuyNFT.encode(value).finish()
            };
        },
        createAuction(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
                value: MsgCreateAuction.encode(value).finish()
            };
        },
        cancelAuction(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
                value: MsgCancelAuction.encode(value).finish()
            };
        },
        placeBid(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
                value: MsgPlaceBid.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        listNFT(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
                value
            };
        },
        editListing(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
                value
            };
        },
        deListNFT(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
                value
            };
        },
        buyNFT(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
                value
            };
        },
        createAuction(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
                value
            };
        },
        cancelAuction(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
                value
            };
        },
        placeBid(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
                value
            };
        }
    },
    fromPartial: {
        listNFT(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgListNFT",
                value: MsgListNFT.fromPartial(value)
            };
        },
        editListing(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgEditListing",
                value: MsgEditListing.fromPartial(value)
            };
        },
        deListNFT(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgDeListNFT",
                value: MsgDeListNFT.fromPartial(value)
            };
        },
        buyNFT(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgBuyNFT",
                value: MsgBuyNFT.fromPartial(value)
            };
        },
        createAuction(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCreateAuction",
                value: MsgCreateAuction.fromPartial(value)
            };
        },
        cancelAuction(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgCancelAuction",
                value: MsgCancelAuction.fromPartial(value)
            };
        },
        placeBid(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgPlaceBid",
                value: MsgPlaceBid.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.marketplace.v1beta1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
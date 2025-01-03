import { MsgCreateDenom, MsgUpdateDenom, MsgTransferDenom, MsgPurgeDenom, MsgMintONFT, MsgTransferONFT, MsgBurnONFT, MsgUpdateParams } from "./tx";
export const registry = [["/OmniFlix.onft.v1beta1.MsgCreateDenom", MsgCreateDenom], ["/OmniFlix.onft.v1beta1.MsgUpdateDenom", MsgUpdateDenom], ["/OmniFlix.onft.v1beta1.MsgTransferDenom", MsgTransferDenom], ["/OmniFlix.onft.v1beta1.MsgPurgeDenom", MsgPurgeDenom], ["/OmniFlix.onft.v1beta1.MsgMintONFT", MsgMintONFT], ["/OmniFlix.onft.v1beta1.MsgTransferONFT", MsgTransferONFT], ["/OmniFlix.onft.v1beta1.MsgBurnONFT", MsgBurnONFT], ["/OmniFlix.onft.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
                value: MsgCreateDenom.encode(value).finish()
            };
        },
        updateDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
                value: MsgUpdateDenom.encode(value).finish()
            };
        },
        transferDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
                value: MsgTransferDenom.encode(value).finish()
            };
        },
        purgeDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom",
                value: MsgPurgeDenom.encode(value).finish()
            };
        },
        mintONFT(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
                value: MsgMintONFT.encode(value).finish()
            };
        },
        transferONFT(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
                value: MsgTransferONFT.encode(value).finish()
            };
        },
        burnONFT(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
                value: MsgBurnONFT.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
                value
            };
        },
        updateDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
                value
            };
        },
        transferDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
                value
            };
        },
        purgeDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom",
                value
            };
        },
        mintONFT(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
                value
            };
        },
        transferONFT(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
                value
            };
        },
        burnONFT(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams",
                value
            };
        }
    },
    fromPartial: {
        createDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgCreateDenom",
                value: MsgCreateDenom.fromPartial(value)
            };
        },
        updateDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateDenom",
                value: MsgUpdateDenom.fromPartial(value)
            };
        },
        transferDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferDenom",
                value: MsgTransferDenom.fromPartial(value)
            };
        },
        purgeDenom(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgPurgeDenom",
                value: MsgPurgeDenom.fromPartial(value)
            };
        },
        mintONFT(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgMintONFT",
                value: MsgMintONFT.fromPartial(value)
            };
        },
        transferONFT(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgTransferONFT",
                value: MsgTransferONFT.fromPartial(value)
            };
        },
        burnONFT(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgBurnONFT",
                value: MsgBurnONFT.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.onft.v1beta1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
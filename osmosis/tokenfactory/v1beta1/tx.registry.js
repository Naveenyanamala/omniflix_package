import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgForceTransfer, MsgUpdateParams } from "./tx";
export const registry = [["/osmosis.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom], ["/osmosis.tokenfactory.v1beta1.MsgMint", MsgMint], ["/osmosis.tokenfactory.v1beta1.MsgBurn", MsgBurn], ["/osmosis.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin], ["/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata", MsgSetDenomMetadata], ["/osmosis.tokenfactory.v1beta1.MsgForceTransfer", MsgForceTransfer], ["/osmosis.tokenfactory.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createDenom(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
                value: MsgCreateDenom.encode(value).finish()
            };
        },
        mint(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
                value: MsgMint.encode(value).finish()
            };
        },
        burn(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
                value: MsgBurn.encode(value).finish()
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
                value: MsgChangeAdmin.encode(value).finish()
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.encode(value).finish()
            };
        },
        forceTransfer(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer",
                value: MsgForceTransfer.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createDenom(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
                value
            };
        },
        mint(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
                value
            };
        },
        burn(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
                value
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
                value
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value
            };
        },
        forceTransfer(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams",
                value
            };
        }
    },
    fromPartial: {
        createDenom(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgCreateDenom",
                value: MsgCreateDenom.fromPartial(value)
            };
        },
        mint(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgMint",
                value: MsgMint.fromPartial(value)
            };
        },
        burn(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgBurn",
                value: MsgBurn.fromPartial(value)
            };
        },
        changeAdmin(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin",
                value: MsgChangeAdmin.fromPartial(value)
            };
        },
        setDenomMetadata(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata",
                value: MsgSetDenomMetadata.fromPartial(value)
            };
        },
        forceTransfer(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgForceTransfer",
                value: MsgForceTransfer.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/osmosis.tokenfactory.v1beta1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
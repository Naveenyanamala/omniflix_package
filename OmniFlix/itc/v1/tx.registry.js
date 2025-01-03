import { MsgCreateCampaign, MsgCancelCampaign, MsgClaim, MsgDepositCampaign, MsgUpdateParams } from "./tx";
export const registry = [["/OmniFlix.itc.v1.MsgCreateCampaign", MsgCreateCampaign], ["/OmniFlix.itc.v1.MsgCancelCampaign", MsgCancelCampaign], ["/OmniFlix.itc.v1.MsgClaim", MsgClaim], ["/OmniFlix.itc.v1.MsgDepositCampaign", MsgDepositCampaign], ["/OmniFlix.itc.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        createCampaign(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
                value: MsgCreateCampaign.encode(value).finish()
            };
        },
        cancelCampaign(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
                value: MsgCancelCampaign.encode(value).finish()
            };
        },
        claim(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgClaim",
                value: MsgClaim.encode(value).finish()
            };
        },
        depositCampaign(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
                value: MsgDepositCampaign.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        createCampaign(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
                value
            };
        },
        cancelCampaign(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
                value
            };
        },
        claim(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgClaim",
                value
            };
        },
        depositCampaign(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
                value
            };
        }
    },
    fromPartial: {
        createCampaign(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgCreateCampaign",
                value: MsgCreateCampaign.fromPartial(value)
            };
        },
        cancelCampaign(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgCancelCampaign",
                value: MsgCancelCampaign.fromPartial(value)
            };
        },
        claim(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgClaim",
                value: MsgClaim.fromPartial(value)
            };
        },
        depositCampaign(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgDepositCampaign",
                value: MsgDepositCampaign.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.itc.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
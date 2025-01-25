import { MsgStreamSend, MsgStopStream, MsgClaimStreamedAmount, MsgUpdateParams } from "./tx";
export const registry = [["/OmniFlix.streampay.v1.MsgStreamSend", MsgStreamSend], ["/OmniFlix.streampay.v1.MsgStopStream", MsgStopStream], ["/OmniFlix.streampay.v1.MsgClaimStreamedAmount", MsgClaimStreamedAmount], ["/OmniFlix.streampay.v1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry) => {
    registry.forEach(([typeUrl, mod]) => {
        protoRegistry.register(typeUrl, mod);
    });
};
export const MessageComposer = {
    encoded: {
        streamSend(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
                value: MsgStreamSend.encode(value).finish()
            };
        },
        stopStream(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
                value: MsgStopStream.encode(value).finish()
            };
        },
        claimStreamedAmount(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
                value: MsgClaimStreamedAmount.encode(value).finish()
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
                value: MsgUpdateParams.encode(value).finish()
            };
        }
    },
    withTypeUrl: {
        streamSend(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
                value
            };
        },
        stopStream(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
                value
            };
        },
        claimStreamedAmount(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
                value
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
                value
            };
        }
    },
    fromPartial: {
        streamSend(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgStreamSend",
                value: MsgStreamSend.fromPartial(value)
            };
        },
        stopStream(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgStopStream",
                value: MsgStopStream.fromPartial(value)
            };
        },
        claimStreamedAmount(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgClaimStreamedAmount",
                value: MsgClaimStreamedAmount.fromPartial(value)
            };
        },
        updateParams(value) {
            return {
                typeUrl: "/OmniFlix.streampay.v1.MsgUpdateParams",
                value: MsgUpdateParams.fromPartial(value)
            };
        }
    }
};
//# sourceMappingURL=tx.registry.js.map
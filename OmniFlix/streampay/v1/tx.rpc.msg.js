import { BinaryReader } from "../../../binary";
import { MsgStreamSend, MsgStreamSendResponse, MsgStopStream, MsgStopStreamResponse, MsgClaimStreamedAmount, MsgClaimStreamedAmountResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
        this.streamSend = this.streamSend.bind(this);
        this.stopStream = this.stopStream.bind(this);
        this.claimStreamedAmount = this.claimStreamedAmount.bind(this);
        this.updateParams = this.updateParams.bind(this);
    }
    streamSend(request) {
        const data = MsgStreamSend.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.streampay.v1.Msg", "StreamSend", data);
        return promise.then(data => MsgStreamSendResponse.decode(new BinaryReader(data)));
    }
    stopStream(request) {
        const data = MsgStopStream.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.streampay.v1.Msg", "StopStream", data);
        return promise.then(data => MsgStopStreamResponse.decode(new BinaryReader(data)));
    }
    claimStreamedAmount(request) {
        const data = MsgClaimStreamedAmount.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.streampay.v1.Msg", "ClaimStreamedAmount", data);
        return promise.then(data => MsgClaimStreamedAmountResponse.decode(new BinaryReader(data)));
    }
    updateParams(request) {
        const data = MsgUpdateParams.encode(request).finish();
        const promise = this.rpc.request("OmniFlix.streampay.v1.Msg", "UpdateParams", data);
        return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
    }
}
//# sourceMappingURL=tx.rpc.msg.js.map